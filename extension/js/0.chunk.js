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
(globalThis["webpackJsonp"] = globalThis["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/react-dom/cjs/react-dom-server.browser.development.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom-server.browser.development.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.12.0
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

// Do not require this module directly! Use normal `invariant` calls with
// template literal strings. The messages will be replaced with error codes
// during build.

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.12.0';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var warningWithoutStack = function () {};

{
  warningWithoutStack = function (condition, format) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (args.length > 8) {
      // Check before the condition to catch violations early.
      throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
    }

    if (condition) {
      return;
    }

    if (typeof console !== 'undefined') {
      var argsWithFormat = args.map(function (item) {
        return '' + item;
      });
      argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
      // breaks IE9: https://github.com/facebook/react/issues/13610

      Function.prototype.apply.call(console.error, console, argsWithFormat);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  };
}

var warningWithoutStack$1 = warningWithoutStack;

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?


var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;

var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED; // Prevent newer renderers from RTE when used with older react package versions.
// Current owner and dispatcher used to share the same ref,
// but PR #14548 split them out to better support the react-debug-tools package.

if (!ReactSharedInternals.hasOwnProperty('ReactCurrentDispatcher')) {
  ReactSharedInternals.ReactCurrentDispatcher = {
    current: null
  };
}

if (!ReactSharedInternals.hasOwnProperty('ReactCurrentBatchConfig')) {
  ReactSharedInternals.ReactCurrentBatchConfig = {
    suspense: null
  };
}

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = warningWithoutStack$1;

{
  warning = function (condition, format) {
    if (condition) {
      return;
    }

    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum(); // eslint-disable-next-line react-internal/warning-and-invariant-args

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    warningWithoutStack$1.apply(void 0, [false, format + '%s'].concat(args, [stack]));
  };
}

var warning$1 = warning;

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}
function initializeLazyComponentType(lazyComponent) {
  if (lazyComponent._status === Uninitialized) {
    lazyComponent._status = Pending;
    var ctor = lazyComponent._ctor;
    var thenable = ctor();
    lazyComponent._result = thenable;
    thenable.then(function (moduleObject) {
      if (lazyComponent._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            warning$1(false, 'lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + "const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
          }
        }

        lazyComponent._status = Resolved;
        lazyComponent._result = defaultExport;
      }
    }, function (error) {
      if (lazyComponent._status === Pending) {
        lazyComponent._status = Rejected;
        lazyComponent._result = error;
      }
    });
  }
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
var describeComponentFrame = function (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
};

// Helps identify side effects in render-phase lifecycle hooks and setState
// reducers by double invoking them in Strict Mode.

 // To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.

 // Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:

var warnAboutDeprecatedLifecycles = true; // Gather advanced timing metrics for Profiler subtrees.

 // Trace which interactions trigger each commit.

 // SSR experiments

var enableSuspenseServerRenderer = false;
 // Only used in www builds.

 // Only used in www builds.

 // Disable javascript: URL strings in href for XSS protection.

var disableJavaScriptURLs = false; // React Fire: prevent the value and checked attributes from syncing
// with their related DOM properties

 // These APIs will no longer be "unstable" in the upcoming 16.7 release,
// Control this behavior with a flag to support 16.6 minor releases in the meanwhile.


 // Experimental React Flare event system and event components support.

var enableFlareAPI = false; // Experimental Host Component support.

var enableFundamentalAPI = false; // Experimental Scope support.

var enableScopeAPI = false; // New API for JSX transforms to target - https://github.com/reactjs/rfcs/pull/107

 // We will enforce mocking scheduler with scheduler/unstable_mock at some point. (v17?)
// Till then, we warn about the missing mock, but still fallback to a legacy mode compatible version

 // For tests, we flush suspense fallbacks in an act scope;
// *except* in some of our own tests, where we test incremental loading states.

 // Add a callback property to suspense to notify which promises are currently
// in the update queue. This allows reporting and tracing of what is causing
// the user to see a loading state.
// Also allows hydration callbacks to fire when a dehydrated boundary gets
// hydrated or deleted.

 // Part of the simplification of React.createElement so we can eventually move
// from React.createElement to React.jsx
// https://github.com/reactjs/rfcs/blob/createlement-rfc/text/0000-create-element-changes.md



var disableLegacyContext = false;

 // Flag to turn event.target and event.currentTarget in ReactNative from a reactTag to a component instance

var ReactDebugCurrentFrame$1;
var didWarnAboutInvalidateContextType;

{
  ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
  didWarnAboutInvalidateContextType = new Set();
}

var emptyObject = {};

{
  Object.freeze(emptyObject);
}

function maskContext(type, context) {
  var contextTypes = type.contextTypes;

  if (!contextTypes) {
    return emptyObject;
  }

  var maskedContext = {};

  for (var contextName in contextTypes) {
    maskedContext[contextName] = context[contextName];
  }

  return maskedContext;
}

function checkContextTypes(typeSpecs, values, location) {
  {
    checkPropTypes(typeSpecs, values, location, 'Component', ReactDebugCurrentFrame$1.getCurrentStack);
  }
}

function validateContextBounds(context, threadID) {
  // If we don't have enough slots in this context to store this threadID,
  // fill it in without leaving any holes to ensure that the VM optimizes
  // this as non-holey index properties.
  // (Note: If `react` package is < 16.6, _threadCount is undefined.)
  for (var i = context._threadCount | 0; i <= threadID; i++) {
    // We assume that this is the same as the defaultValue which might not be
    // true if we're rendering inside a secondary renderer but they are
    // secondary because these use cases are very rare.
    context[i] = context._currentValue2;
    context._threadCount = i + 1;
  }
}
function processContext(type, context, threadID, isClass) {
  if (isClass) {
    var contextType = type.contextType;

    {
      if ('contextType' in type) {
        var isValid = // Allow null for conditional declaration
        contextType === null || contextType !== undefined && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === undefined; // Not a <Context.Consumer>

        if (!isValid && !didWarnAboutInvalidateContextType.has(type)) {
          didWarnAboutInvalidateContextType.add(type);
          var addendum = '';

          if (contextType === undefined) {
            addendum = ' However, it is set to undefined. ' + 'This can be caused by a typo or by mixing up named and default imports. ' + 'This can also happen due to a circular dependency, so ' + 'try moving the createContext() call to a separate file.';
          } else if (typeof contextType !== 'object') {
            addendum = ' However, it is set to a ' + typeof contextType + '.';
          } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
            addendum = ' Did you accidentally pass the Context.Provider instead?';
          } else if (contextType._context !== undefined) {
            // <Context.Consumer>
            addendum = ' Did you accidentally pass the Context.Consumer instead?';
          } else {
            addendum = ' However, it is set to an object with keys {' + Object.keys(contextType).join(', ') + '}.';
          }

          warningWithoutStack$1(false, '%s defines an invalid contextType. ' + 'contextType should point to the Context object returned by React.createContext().%s', getComponentName(type) || 'Component', addendum);
        }
      }
    }

    if (typeof contextType === 'object' && contextType !== null) {
      validateContextBounds(contextType, threadID);
      return contextType[threadID];
    }

    if (disableLegacyContext) {
      {
        if (type.contextTypes) {
          warningWithoutStack$1(false, '%s uses the legacy contextTypes API which is no longer supported. ' + 'Use React.createContext() with static contextType instead.', getComponentName(type) || 'Unknown');
        }
      }

      return emptyObject;
    } else {
      var maskedContext = maskContext(type, context);

      {
        if (type.contextTypes) {
          checkContextTypes(type.contextTypes, maskedContext, 'context');
        }
      }

      return maskedContext;
    }
  } else {
    if (disableLegacyContext) {
      {
        if (type.contextTypes) {
          warningWithoutStack$1(false, '%s uses the legacy contextTypes API which is no longer supported. ' + 'Use React.createContext() with React.useContext() instead.', getComponentName(type) || 'Unknown');
        }
      }

      return undefined;
    } else {
      var _maskedContext = maskContext(type, context);

      {
        if (type.contextTypes) {
          checkContextTypes(type.contextTypes, _maskedContext, 'context');
        }
      }

      return _maskedContext;
    }
  }
}

// Allocates a new index for each request. Tries to stay as compact as possible so that these
// indices can be used to reference a tightly packed array. As opposed to being used in a Map.
// The first allocated index is 1.
var nextAvailableThreadIDs = new Uint16Array(16);

for (var i = 0; i < 15; i++) {
  nextAvailableThreadIDs[i] = i + 1;
}

nextAvailableThreadIDs[15] = 0;

function growThreadCountAndReturnNextAvailable() {
  var oldArray = nextAvailableThreadIDs;
  var oldSize = oldArray.length;
  var newSize = oldSize * 2;

  if (!(newSize <= 0x10000)) {
    {
      throw Error("Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic.");
    }
  }

  var newArray = new Uint16Array(newSize);
  newArray.set(oldArray);
  nextAvailableThreadIDs = newArray;
  nextAvailableThreadIDs[0] = oldSize + 1;

  for (var _i = oldSize; _i < newSize - 1; _i++) {
    nextAvailableThreadIDs[_i] = _i + 1;
  }

  nextAvailableThreadIDs[newSize - 1] = 0;
  return oldSize;
}

function allocThreadID() {
  var nextID = nextAvailableThreadIDs[0];

  if (nextID === 0) {
    return growThreadCountAndReturnNextAvailable();
  }

  nextAvailableThreadIDs[0] = nextAvailableThreadIDs[nextID];
  return nextID;
}
function freeThreadID(id) {
  nextAvailableThreadIDs[id] = nextAvailableThreadIDs[0];
  nextAvailableThreadIDs[0] = id;
}

// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
var RESERVED = 0; // A simple string attribute.
// Attributes that aren't in the whitelist are presumed to have this type.

var STRING = 1; // A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.

var BOOLEANISH_STRING = 2; // A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.

var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.

var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.

var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.

var POSITIVE_NUMERIC = 6;

/* eslint-disable max-len */
var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
/* eslint-enable max-len */

var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";

var ROOT_ATTRIBUTE_NAME = 'data-reactroot';
var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var illegalAttributeNameCache = {};
var validatedAttributeNameCache = {};
function isAttributeNameSafe(attributeName) {
  if (hasOwnProperty$1.call(validatedAttributeNameCache, attributeName)) {
    return true;
  }

  if (hasOwnProperty$1.call(illegalAttributeNameCache, attributeName)) {
    return false;
  }

  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
    validatedAttributeNameCache[attributeName] = true;
    return true;
  }

  illegalAttributeNameCache[attributeName] = true;

  {
    warning$1(false, 'Invalid attribute name: `%s`', attributeName);
  }

  return false;
}
function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null) {
    return propertyInfo.type === RESERVED;
  }

  if (isCustomComponentTag) {
    return false;
  }

  if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
    return true;
  }

  return false;
}
function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null && propertyInfo.type === RESERVED) {
    return false;
  }

  switch (typeof value) {
    case 'function': // $FlowIssue symbol is perfectly valid here

    case 'symbol':
      // eslint-disable-line
      return true;

    case 'boolean':
      {
        if (isCustomComponentTag) {
          return false;
        }

        if (propertyInfo !== null) {
          return !propertyInfo.acceptsBooleans;
        } else {
          var prefix = name.toLowerCase().slice(0, 5);
          return prefix !== 'data-' && prefix !== 'aria-';
        }
      }

    default:
      return false;
  }
}
function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
  if (value === null || typeof value === 'undefined') {
    return true;
  }

  if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) {
    return true;
  }

  if (isCustomComponentTag) {
    return false;
  }

  if (propertyInfo !== null) {
    switch (propertyInfo.type) {
      case BOOLEAN:
        return !value;

      case OVERLOADED_BOOLEAN:
        return value === false;

      case NUMERIC:
        return isNaN(value);

      case POSITIVE_NUMERIC:
        return isNaN(value) || value < 1;
    }
  }

  return false;
}
function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL) {
  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
  this.sanitizeURL = sanitizeURL;
} // When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.


var properties = {}; // These props are reserved by React. They shouldn't be written to the DOM.

['children', 'dangerouslySetInnerHTML', // TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false);
}); // A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.

[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
  var name = _ref[0],
      attributeName = _ref[1];
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, // attributeName
  null, // attributeNamespace
  false);
}); // These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).

['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false);
}); // These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.

['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false);
}); // These are HTML boolean attributes.

['allowFullScreen', 'async', // Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'disablePictureInPicture', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', // Microdata
'itemScope'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false);
}); // These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.

['checked', // Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
'multiple', 'muted', 'selected'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false);
}); // These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.

['capture', 'download'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false);
}); // These are HTML attributes that must be positive numbers.

['cols', 'rows', 'size', 'span'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false);
}); // These are HTML attributes that must be numbers.

['rowSpan', 'start'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false);
});
var CAMELIZE = /[\-\:]([a-z])/g;

var capitalize = function (token) {
  return token[1].toUpperCase();
}; // This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML whitelist.
// Some of these attributes can be hard to find. This list was created by
// scrapping the MDN documentation.


['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height'].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, null, // attributeNamespace
  false);
}); // String SVG attributes with the xlink namespace.

['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type'].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/1999/xlink', false);
}); // String SVG attributes with the xml namespace.

['xml:base', 'xml:lang', 'xml:space'].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/XML/1998/namespace', false);
}); // These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.

['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  false);
}); // These attributes accept URLs. These must not allow javascript: URLS.
// These will also need to accept Trusted Types object in the future.

var xlinkHref = 'xlinkHref';
properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, // mustUseProperty
'xlink:href', 'http://www.w3.org/1999/xlink', true);
['src', 'href', 'action', 'formAction'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  true);
});

var ReactDebugCurrentFrame$2 = null;

{
  ReactDebugCurrentFrame$2 = ReactSharedInternals.ReactDebugCurrentFrame;
} // A javascript: URL can contain leading C0 control or \u0020 SPACE,
// and any newline or tab are filtered out as if they're not part of the URL.
// https://url.spec.whatwg.org/#url-parsing
// Tab or newline are defined as \r\n\t:
// https://infra.spec.whatwg.org/#ascii-tab-or-newline
// A C0 control is a code point in the range \u0000 NULL to \u001F
// INFORMATION SEPARATOR ONE, inclusive:
// https://infra.spec.whatwg.org/#c0-control-or-space

/* eslint-disable max-len */


var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
var didWarn = false;

function sanitizeURL(url) {
  if (disableJavaScriptURLs) {
    if (!!isJavaScriptProtocol.test(url)) {
      {
        throw Error("React has blocked a javascript: URL as a security precaution." + (ReactDebugCurrentFrame$2.getStackAddendum()));
      }
    }
  } else if ( true && !didWarn && isJavaScriptProtocol.test(url)) {
    didWarn = true;
    warning$1(false, 'A future version of React will block javascript: URLs as a security precaution. ' + 'Use event handlers instead if you can. If you need to generate unsafe HTML try ' + 'using dangerouslySetInnerHTML instead. React was passed %s.', JSON.stringify(url));
  }
}

// code copied and modified from escape-html

/**
 * Module variables.
 * @private
 */
var matchHtmlRegExp = /["'&<>]/;
/**
 * Escapes special characters and HTML entities in a given html string.
 *
 * @param  {string} string HTML string to escape for later insertion
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escape = '&quot;';
        break;

      case 38:
        // &
        escape = '&amp;';
        break;

      case 39:
        // '
        escape = '&#x27;'; // modified from escape-html; used to be '&#39'

        break;

      case 60:
        // <
        escape = '&lt;';
        break;

      case 62:
        // >
        escape = '&gt;';
        break;

      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
} // end code copied and modified from escape-html

/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */


function escapeTextForBrowser(text) {
  if (typeof text === 'boolean' || typeof text === 'number') {
    // this shortcircuit helps perf for types that we know will never have
    // special characters, especially given that this function is used often
    // for numeric dom ids.
    return '' + text;
  }

  return escapeHtml(text);
}

/**
 * Escapes attribute value to prevent scripting attacks.
 *
 * @param {*} value Value to escape.
 * @return {string} An escaped string.
 */

function quoteAttributeValueForBrowser(value) {
  return '"' + escapeTextForBrowser(value) + '"';
}

/**
 * Operations for dealing with DOM properties.
 */

/**
 * Creates markup for the ID property.
 *
 * @param {string} id Unescaped ID.
 * @return {string} Markup string.
 */


function createMarkupForRoot() {
  return ROOT_ATTRIBUTE_NAME + '=""';
}
/**
 * Creates markup for a property.
 *
 * @param {string} name
 * @param {*} value
 * @return {?string} Markup string, or null if the property was invalid.
 */

function createMarkupForProperty(name, value) {
  var propertyInfo = getPropertyInfo(name);

  if (name !== 'style' && shouldIgnoreAttribute(name, propertyInfo, false)) {
    return '';
  }

  if (shouldRemoveAttribute(name, value, propertyInfo, false)) {
    return '';
  }

  if (propertyInfo !== null) {
    var attributeName = propertyInfo.attributeName;
    var type = propertyInfo.type;

    if (type === BOOLEAN || type === OVERLOADED_BOOLEAN && value === true) {
      return attributeName + '=""';
    } else {
      if (propertyInfo.sanitizeURL) {
        value = '' + value;
        sanitizeURL(value);
      }

      return attributeName + '=' + quoteAttributeValueForBrowser(value);
    }
  } else if (isAttributeNameSafe(name)) {
    return name + '=' + quoteAttributeValueForBrowser(value);
  }

  return '';
}
/**
 * Creates markup for a custom property.
 *
 * @param {string} name
 * @param {*} value
 * @return {string} Markup string, or empty string if the property was invalid.
 */

function createMarkupForCustomAttribute(name, value) {
  if (!isAttributeNameSafe(name) || value == null) {
    return '';
  }

  return name + '=' + quoteAttributeValueForBrowser(value);
}

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var is$1 = typeof Object.is === 'function' ? Object.is : is;

var currentlyRenderingComponent = null;
var firstWorkInProgressHook = null;
var workInProgressHook = null; // Whether the work-in-progress hook is a re-rendered hook

var isReRender = false; // Whether an update was scheduled during the currently executing render pass.

var didScheduleRenderPhaseUpdate = false; // Lazily created map of render-phase updates

var renderPhaseUpdates = null; // Counter to prevent infinite loops.

var numberOfReRenders = 0;
var RE_RENDER_LIMIT = 25;
var isInHookUserCodeInDev = false; // In DEV, this is the name of the currently executing primitive hook

var currentHookNameInDev;

function resolveCurrentlyRenderingComponent() {
  if (!(currentlyRenderingComponent !== null)) {
    {
      throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.");
    }
  }

  {
    !!isInHookUserCodeInDev ? warning$1(false, 'Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. ' + 'You can only call Hooks at the top level of your React function. ' + 'For more information, see ' + 'https://fb.me/rules-of-hooks') : void 0;
  }

  return currentlyRenderingComponent;
}

function areHookInputsEqual(nextDeps, prevDeps) {
  if (prevDeps === null) {
    {
      warning$1(false, '%s received a final argument during this render, but not during ' + 'the previous render. Even though the final argument is optional, ' + 'its type cannot change between renders.', currentHookNameInDev);
    }

    return false;
  }

  {
    // Don't bother comparing lengths in prod because these arrays should be
    // passed inline.
    if (nextDeps.length !== prevDeps.length) {
      warning$1(false, 'The final argument passed to %s changed size between renders. The ' + 'order and size of this array must remain constant.\n\n' + 'Previous: %s\n' + 'Incoming: %s', currentHookNameInDev, "[" + nextDeps.join(', ') + "]", "[" + prevDeps.join(', ') + "]");
    }
  }

  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
    if (is$1(nextDeps[i], prevDeps[i])) {
      continue;
    }

    return false;
  }

  return true;
}

function createHook() {
  if (numberOfReRenders > 0) {
    {
      {
        throw Error("Rendered more hooks than during the previous render");
      }
    }
  }

  return {
    memoizedState: null,
    queue: null,
    next: null
  };
}

function createWorkInProgressHook() {
  if (workInProgressHook === null) {
    // This is the first hook in the list
    if (firstWorkInProgressHook === null) {
      isReRender = false;
      firstWorkInProgressHook = workInProgressHook = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = firstWorkInProgressHook;
    }
  } else {
    if (workInProgressHook.next === null) {
      isReRender = false; // Append to the end of the list

      workInProgressHook = workInProgressHook.next = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = workInProgressHook.next;
    }
  }

  return workInProgressHook;
}

function prepareToUseHooks(componentIdentity) {
  currentlyRenderingComponent = componentIdentity;

  {
    isInHookUserCodeInDev = false;
  } // The following should have already been reset
  // didScheduleRenderPhaseUpdate = false;
  // firstWorkInProgressHook = null;
  // numberOfReRenders = 0;
  // renderPhaseUpdates = null;
  // workInProgressHook = null;

}
function finishHooks(Component, props, children, refOrContext) {
  // This must be called after every function component to prevent hooks from
  // being used in classes.
  while (didScheduleRenderPhaseUpdate) {
    // Updates were scheduled during the render phase. They are stored in
    // the `renderPhaseUpdates` map. Call the component again, reusing the
    // work-in-progress hooks and applying the additional updates on top. Keep
    // restarting until no more updates are scheduled.
    didScheduleRenderPhaseUpdate = false;
    numberOfReRenders += 1; // Start over from the beginning of the list

    workInProgressHook = null;
    children = Component(props, refOrContext);
  }

  currentlyRenderingComponent = null;
  firstWorkInProgressHook = null;
  numberOfReRenders = 0;
  renderPhaseUpdates = null;
  workInProgressHook = null;

  {
    isInHookUserCodeInDev = false;
  } // These were reset above
  // currentlyRenderingComponent = null;
  // didScheduleRenderPhaseUpdate = false;
  // firstWorkInProgressHook = null;
  // numberOfReRenders = 0;
  // renderPhaseUpdates = null;
  // workInProgressHook = null;


  return children;
}

function readContext(context, observedBits) {
  var threadID = currentThreadID;
  validateContextBounds(context, threadID);

  {
    !!isInHookUserCodeInDev ? warning$1(false, 'Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().') : void 0;
  }

  return context[threadID];
}

function useContext(context, observedBits) {
  {
    currentHookNameInDev = 'useContext';
  }

  resolveCurrentlyRenderingComponent();
  var threadID = currentThreadID;
  validateContextBounds(context, threadID);
  return context[threadID];
}

function basicStateReducer(state, action) {
  return typeof action === 'function' ? action(state) : action;
}

function useState(initialState) {
  {
    currentHookNameInDev = 'useState';
  }

  return useReducer(basicStateReducer, // useReducer has a special case to support lazy useState initializers
  initialState);
}
function useReducer(reducer, initialArg, init) {
  {
    if (reducer !== basicStateReducer) {
      currentHookNameInDev = 'useReducer';
    }
  }

  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();

  if (isReRender) {
    // This is a re-render. Apply the new render phase updates to the previous
    // current hook.
    var queue = workInProgressHook.queue;
    var dispatch = queue.dispatch;

    if (renderPhaseUpdates !== null) {
      // Render phase updates are stored in a map of queue -> linked list
      var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

      if (firstRenderPhaseUpdate !== undefined) {
        renderPhaseUpdates.delete(queue);
        var newState = workInProgressHook.memoizedState;
        var update = firstRenderPhaseUpdate;

        do {
          // Process this render phase update. We don't have to check the
          // priority because it will always be the same as the current
          // render's.
          var action = update.action;

          {
            isInHookUserCodeInDev = true;
          }

          newState = reducer(newState, action);

          {
            isInHookUserCodeInDev = false;
          }

          update = update.next;
        } while (update !== null);

        workInProgressHook.memoizedState = newState;
        return [newState, dispatch];
      }
    }

    return [workInProgressHook.memoizedState, dispatch];
  } else {
    {
      isInHookUserCodeInDev = true;
    }

    var initialState;

    if (reducer === basicStateReducer) {
      // Special case for `useState`.
      initialState = typeof initialArg === 'function' ? initialArg() : initialArg;
    } else {
      initialState = init !== undefined ? init(initialArg) : initialArg;
    }

    {
      isInHookUserCodeInDev = false;
    }

    workInProgressHook.memoizedState = initialState;

    var _queue = workInProgressHook.queue = {
      last: null,
      dispatch: null
    };

    var _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);

    return [workInProgressHook.memoizedState, _dispatch];
  }
}

function useMemo(nextCreate, deps) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  var nextDeps = deps === undefined ? null : deps;

  if (workInProgressHook !== null) {
    var prevState = workInProgressHook.memoizedState;

    if (prevState !== null) {
      if (nextDeps !== null) {
        var prevDeps = prevState[1];

        if (areHookInputsEqual(nextDeps, prevDeps)) {
          return prevState[0];
        }
      }
    }
  }

  {
    isInHookUserCodeInDev = true;
  }

  var nextValue = nextCreate();

  {
    isInHookUserCodeInDev = false;
  }

  workInProgressHook.memoizedState = [nextValue, nextDeps];
  return nextValue;
}

function useRef(initialValue) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  var previousRef = workInProgressHook.memoizedState;

  if (previousRef === null) {
    var ref = {
      current: initialValue
    };

    {
      Object.seal(ref);
    }

    workInProgressHook.memoizedState = ref;
    return ref;
  } else {
    return previousRef;
  }
}

function useLayoutEffect(create, inputs) {
  {
    currentHookNameInDev = 'useLayoutEffect';
  }

  warning$1(false, 'useLayoutEffect does nothing on the server, because its effect cannot ' + "be encoded into the server renderer's output format. This will lead " + 'to a mismatch between the initial, non-hydrated UI and the intended ' + 'UI. To avoid this, useLayoutEffect should only be used in ' + 'components that render exclusively on the client. ' + 'See https://fb.me/react-uselayouteffect-ssr for common fixes.');
}

function dispatchAction(componentIdentity, queue, action) {
  if (!(numberOfReRenders < RE_RENDER_LIMIT)) {
    {
      throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
    }
  }

  if (componentIdentity === currentlyRenderingComponent) {
    // This is a render phase update. Stash it in a lazily-created map of
    // queue -> linked list of updates. After this render pass, we'll restart
    // and apply the stashed updates on top of the work-in-progress hook.
    didScheduleRenderPhaseUpdate = true;
    var update = {
      action: action,
      next: null
    };

    if (renderPhaseUpdates === null) {
      renderPhaseUpdates = new Map();
    }

    var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

    if (firstRenderPhaseUpdate === undefined) {
      renderPhaseUpdates.set(queue, update);
    } else {
      // Append the update to the end of the list.
      var lastRenderPhaseUpdate = firstRenderPhaseUpdate;

      while (lastRenderPhaseUpdate.next !== null) {
        lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
      }

      lastRenderPhaseUpdate.next = update;
    }
  } else {// This means an update has happened after the function component has
    // returned. On the server this is a no-op. In React Fiber, the update
    // would be scheduled for a future render.
  }
}

function useCallback(callback, deps) {
  // Callbacks are passed as they are in the server environment.
  return callback;
}

function useResponder(responder, props) {
  return {
    props: props,
    responder: responder
  };
}

function useDeferredValue(value, config) {
  resolveCurrentlyRenderingComponent();
  return value;
}

function useTransition(config) {
  resolveCurrentlyRenderingComponent();

  var startTransition = function (callback) {
    callback();
  };

  return [startTransition, false];
}

function noop() {}

var currentThreadID = 0;
function setCurrentThreadID(threadID) {
  currentThreadID = threadID;
}
var Dispatcher = {
  readContext: readContext,
  useContext: useContext,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,
  useLayoutEffect: useLayoutEffect,
  useCallback: useCallback,
  // useImperativeHandle is not run in the server environment
  useImperativeHandle: noop,
  // Effects are not run in the server environment.
  useEffect: noop,
  // Debugging effect
  useDebugValue: noop,
  useResponder: useResponder,
  useDeferredValue: useDeferredValue,
  useTransition: useTransition
};

var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
var Namespaces = {
  html: HTML_NAMESPACE,
  mathml: MATH_NAMESPACE,
  svg: SVG_NAMESPACE
}; // Assumes there is no parent namespace.

function getIntrinsicNamespace(type) {
  switch (type) {
    case 'svg':
      return SVG_NAMESPACE;

    case 'math':
      return MATH_NAMESPACE;

    default:
      return HTML_NAMESPACE;
  }
}
function getChildNamespace(parentNamespace, type) {
  if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
    // No (or default) parent namespace: potential entry point.
    return getIntrinsicNamespace(type);
  }

  if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
    // We're leaving SVG.
    return HTML_NAMESPACE;
  } // By default, pass namespace below.


  return parentNamespace;
}

var ReactDebugCurrentFrame$3 = null;
var ReactControlledValuePropTypes = {
  checkPropTypes: null
};

{
  ReactDebugCurrentFrame$3 = ReactSharedInternals.ReactDebugCurrentFrame;
  var hasReadOnlyValue = {
    button: true,
    checkbox: true,
    image: true,
    hidden: true,
    radio: true,
    reset: true,
    submit: true
  };
  var propTypes = {
    value: function (props, propName, componentName) {
      if (hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled || props[propName] == null || enableFlareAPI && props.listeners) {
        return null;
      }

      return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    },
    checked: function (props, propName, componentName) {
      if (props.onChange || props.readOnly || props.disabled || props[propName] == null || enableFlareAPI && props.listeners) {
        return null;
      }

      return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    }
  };
  /**
   * Provide a linked `value` attribute for controlled forms. You should not use
   * this outside of the ReactDOM controlled form components.
   */

  ReactControlledValuePropTypes.checkPropTypes = function (tagName, props) {
    checkPropTypes(propTypes, props, 'prop', tagName, ReactDebugCurrentFrame$3.getStackAddendum);
  };
}

// For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special-case tags.
var omittedCloseTags = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true // NOTE: menuitem's close tag should be omitted, but that causes problems.

};

// `omittedCloseTags` except that `menuitem` should still have its closing tag.

var voidElementTags = _assign({
  menuitem: true
}, omittedCloseTags);

// or add stack by default to invariants where possible.

var HTML = '__html';
var ReactDebugCurrentFrame$4 = null;

{
  ReactDebugCurrentFrame$4 = ReactSharedInternals.ReactDebugCurrentFrame;
}

function assertValidProps(tag, props) {
  if (!props) {
    return;
  } // Note the use of `==` which checks for null or undefined.


  if (voidElementTags[tag]) {
    if (!(props.children == null && props.dangerouslySetInnerHTML == null)) {
      {
        throw Error(tag + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`." + (ReactDebugCurrentFrame$4.getStackAddendum()));
      }
    }
  }

  if (props.dangerouslySetInnerHTML != null) {
    if (!(props.children == null)) {
      {
        throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
      }
    }

    if (!(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML)) {
      {
        throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.");
      }
    }
  }

  {
    !(props.suppressContentEditableWarning || !props.contentEditable || props.children == null) ? warning$1(false, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.') : void 0;
  }

  if (!(props.style == null || typeof props.style === 'object')) {
    {
      throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX." + (ReactDebugCurrentFrame$4.getStackAddendum()));
    }
  }
}

/**
 * CSS properties which accept numbers but are not in units of "px".
 */
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */

function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}
/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */


var prefixes = ['Webkit', 'ms', 'Moz', 'O']; // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.

Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */

function dangerousStyleValue(name, value, isCustomProperty) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901
  var isEmpty = value == null || typeof value === 'boolean' || value === '';

  if (isEmpty) {
    return '';
  }

  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return ('' + value).trim();
}

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 */

function hyphenateStyleName(name) {
  return name.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return typeof props.is === 'string';
  }

  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this whitelist too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;

    default:
      return true;
  }
}

var warnValidStyle = function () {};

{
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
  var msPattern$1 = /^-ms-/;
  var hyphenPattern = /-(.)/g; // style values shouldn't contain a semicolon

  var badStyleValueWithSemicolonPattern = /;\s*$/;
  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;
  var warnedForInfinityValue = false;

  var camelize = function (string) {
    return string.replace(hyphenPattern, function (_, character) {
      return character.toUpperCase();
    });
  };

  var warnHyphenatedStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    warning$1(false, 'Unsupported style property %s. Did you mean %s?', name, // As Andi Smith suggests
    // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
    // is converted to lowercase `ms`.
    camelize(name.replace(msPattern$1, 'ms-')));
  };

  var warnBadVendoredStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    warning$1(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1));
  };

  var warnStyleValueWithSemicolon = function (name, value) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;
    warning$1(false, "Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, ''));
  };

  var warnStyleValueIsNaN = function (name, value) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;
    warning$1(false, '`NaN` is an invalid value for the `%s` css style property.', name);
  };

  var warnStyleValueIsInfinity = function (name, value) {
    if (warnedForInfinityValue) {
      return;
    }

    warnedForInfinityValue = true;
    warning$1(false, '`Infinity` is an invalid value for the `%s` css style property.', name);
  };

  warnValidStyle = function (name, value) {
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value);
    }

    if (typeof value === 'number') {
      if (isNaN(value)) {
        warnStyleValueIsNaN(name, value);
      } else if (!isFinite(value)) {
        warnStyleValueIsInfinity(name, value);
      }
    }
  };
}

var warnValidStyle$1 = warnValidStyle;

var ariaProperties = {
  'aria-current': 0,
  // state
  'aria-details': 0,
  'aria-disabled': 0,
  // state
  'aria-hidden': 0,
  // state
  'aria-invalid': 0,
  // state
  'aria-keyshortcuts': 0,
  'aria-label': 0,
  'aria-roledescription': 0,
  // Widget Attributes
  'aria-autocomplete': 0,
  'aria-checked': 0,
  'aria-expanded': 0,
  'aria-haspopup': 0,
  'aria-level': 0,
  'aria-modal': 0,
  'aria-multiline': 0,
  'aria-multiselectable': 0,
  'aria-orientation': 0,
  'aria-placeholder': 0,
  'aria-pressed': 0,
  'aria-readonly': 0,
  'aria-required': 0,
  'aria-selected': 0,
  'aria-sort': 0,
  'aria-valuemax': 0,
  'aria-valuemin': 0,
  'aria-valuenow': 0,
  'aria-valuetext': 0,
  // Live Region Attributes
  'aria-atomic': 0,
  'aria-busy': 0,
  'aria-live': 0,
  'aria-relevant': 0,
  // Drag-and-Drop Attributes
  'aria-dropeffect': 0,
  'aria-grabbed': 0,
  // Relationship Attributes
  'aria-activedescendant': 0,
  'aria-colcount': 0,
  'aria-colindex': 0,
  'aria-colspan': 0,
  'aria-controls': 0,
  'aria-describedby': 0,
  'aria-errormessage': 0,
  'aria-flowto': 0,
  'aria-labelledby': 0,
  'aria-owns': 0,
  'aria-posinset': 0,
  'aria-rowcount': 0,
  'aria-rowindex': 0,
  'aria-rowspan': 0,
  'aria-setsize': 0
};

var warnedProperties = {};
var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');
var hasOwnProperty$2 = Object.prototype.hasOwnProperty;

function validateProperty(tagName, name) {
  if (hasOwnProperty$2.call(warnedProperties, name) && warnedProperties[name]) {
    return true;
  }

  if (rARIACamel.test(name)) {
    var ariaName = 'aria-' + name.slice(4).toLowerCase();
    var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null; // If this is an aria-* attribute, but is not listed in the known DOM
    // DOM properties, then it is an invalid aria-* attribute.

    if (correctName == null) {
      warning$1(false, 'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.', name);
      warnedProperties[name] = true;
      return true;
    } // aria-* attributes should be lowercase; suggest the lowercase version.


    if (name !== correctName) {
      warning$1(false, 'Invalid ARIA attribute `%s`. Did you mean `%s`?', name, correctName);
      warnedProperties[name] = true;
      return true;
    }
  }

  if (rARIA.test(name)) {
    var lowerCasedName = name.toLowerCase();
    var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null; // If this is an aria-* attribute, but is not listed in the known DOM
    // DOM properties, then it is an invalid aria-* attribute.

    if (standardName == null) {
      warnedProperties[name] = true;
      return false;
    } // aria-* attributes should be lowercase; suggest the lowercase version.


    if (name !== standardName) {
      warning$1(false, 'Unknown ARIA attribute `%s`. Did you mean `%s`?', name, standardName);
      warnedProperties[name] = true;
      return true;
    }
  }

  return true;
}

function warnInvalidARIAProps(type, props) {
  var invalidProps = [];

  for (var key in props) {
    var isValid = validateProperty(type, key);

    if (!isValid) {
      invalidProps.push(key);
    }
  }

  var unknownPropString = invalidProps.map(function (prop) {
    return '`' + prop + '`';
  }).join(', ');

  if (invalidProps.length === 1) {
    warning$1(false, 'Invalid aria prop %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop', unknownPropString, type);
  } else if (invalidProps.length > 1) {
    warning$1(false, 'Invalid aria props %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop', unknownPropString, type);
  }
}

function validateProperties(type, props) {
  if (isCustomComponent(type, props)) {
    return;
  }

  warnInvalidARIAProps(type, props);
}

var didWarnValueNull = false;
function validateProperties$1(type, props) {
  if (type !== 'input' && type !== 'textarea' && type !== 'select') {
    return;
  }

  if (props != null && props.value === null && !didWarnValueNull) {
    didWarnValueNull = true;

    if (type === 'select' && props.multiple) {
      warning$1(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.', type);
    } else {
      warning$1(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.', type);
    }
  }
}

/**
 * Registers plugins so that they can extract and dispatch events.
 *
 * @see {EventPluginHub}
 */

/**
 * Ordered list of injected plugins.
 */



/**
 * Mapping from event name to dispatch config
 */


/**
 * Mapping from registration name to plugin module
 */

var registrationNameModules = {};
/**
 * Mapping from registration name to event name
 */


/**
 * Mapping from lowercase registration names to the properly cased version,
 * used to warn in the case of missing event handlers. Available
 * only in true.
 * @type {Object}
 */

var possibleRegistrationNames = {}; // Trust the developer to only use possibleRegistrationNames in true

/**
 * Injects an ordering of plugins (by plugin name). This allows the ordering
 * to be decoupled from injection of the actual plugins so that ordering is
 * always deterministic regardless of packaging, on-the-fly injection, etc.
 *
 * @param {array} InjectedEventPluginOrder
 * @internal
 * @see {EventPluginHub.injection.injectEventPluginOrder}
 */


/**
 * Injects plugins to be used by `EventPluginHub`. The plugin names must be
 * in the ordering injected by `injectEventPluginOrder`.
 *
 * Plugins can be injected as part of page initialization or on-the-fly.
 *
 * @param {object} injectedNamesToPlugins Map from names to plugin modules.
 * @internal
 * @see {EventPluginHub.injection.injectEventPluginsByName}
 */

// When adding attributes to the HTML or SVG whitelist, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
var possibleStandardNames = {
  // HTML
  accept: 'accept',
  acceptcharset: 'acceptCharset',
  'accept-charset': 'acceptCharset',
  accesskey: 'accessKey',
  action: 'action',
  allowfullscreen: 'allowFullScreen',
  alt: 'alt',
  as: 'as',
  async: 'async',
  autocapitalize: 'autoCapitalize',
  autocomplete: 'autoComplete',
  autocorrect: 'autoCorrect',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  autosave: 'autoSave',
  capture: 'capture',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  challenge: 'challenge',
  charset: 'charSet',
  checked: 'checked',
  children: 'children',
  cite: 'cite',
  class: 'className',
  classid: 'classID',
  classname: 'className',
  cols: 'cols',
  colspan: 'colSpan',
  content: 'content',
  contenteditable: 'contentEditable',
  contextmenu: 'contextMenu',
  controls: 'controls',
  controlslist: 'controlsList',
  coords: 'coords',
  crossorigin: 'crossOrigin',
  dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
  data: 'data',
  datetime: 'dateTime',
  default: 'default',
  defaultchecked: 'defaultChecked',
  defaultvalue: 'defaultValue',
  defer: 'defer',
  dir: 'dir',
  disabled: 'disabled',
  disablepictureinpicture: 'disablePictureInPicture',
  download: 'download',
  draggable: 'draggable',
  enctype: 'encType',
  for: 'htmlFor',
  form: 'form',
  formmethod: 'formMethod',
  formaction: 'formAction',
  formenctype: 'formEncType',
  formnovalidate: 'formNoValidate',
  formtarget: 'formTarget',
  frameborder: 'frameBorder',
  headers: 'headers',
  height: 'height',
  hidden: 'hidden',
  high: 'high',
  href: 'href',
  hreflang: 'hrefLang',
  htmlfor: 'htmlFor',
  httpequiv: 'httpEquiv',
  'http-equiv': 'httpEquiv',
  icon: 'icon',
  id: 'id',
  innerhtml: 'innerHTML',
  inputmode: 'inputMode',
  integrity: 'integrity',
  is: 'is',
  itemid: 'itemID',
  itemprop: 'itemProp',
  itemref: 'itemRef',
  itemscope: 'itemScope',
  itemtype: 'itemType',
  keyparams: 'keyParams',
  keytype: 'keyType',
  kind: 'kind',
  label: 'label',
  lang: 'lang',
  list: 'list',
  loop: 'loop',
  low: 'low',
  manifest: 'manifest',
  marginwidth: 'marginWidth',
  marginheight: 'marginHeight',
  max: 'max',
  maxlength: 'maxLength',
  media: 'media',
  mediagroup: 'mediaGroup',
  method: 'method',
  min: 'min',
  minlength: 'minLength',
  multiple: 'multiple',
  muted: 'muted',
  name: 'name',
  nomodule: 'noModule',
  nonce: 'nonce',
  novalidate: 'noValidate',
  open: 'open',
  optimum: 'optimum',
  pattern: 'pattern',
  placeholder: 'placeholder',
  playsinline: 'playsInline',
  poster: 'poster',
  preload: 'preload',
  profile: 'profile',
  radiogroup: 'radioGroup',
  readonly: 'readOnly',
  referrerpolicy: 'referrerPolicy',
  rel: 'rel',
  required: 'required',
  reversed: 'reversed',
  role: 'role',
  rows: 'rows',
  rowspan: 'rowSpan',
  sandbox: 'sandbox',
  scope: 'scope',
  scoped: 'scoped',
  scrolling: 'scrolling',
  seamless: 'seamless',
  selected: 'selected',
  shape: 'shape',
  size: 'size',
  sizes: 'sizes',
  span: 'span',
  spellcheck: 'spellCheck',
  src: 'src',
  srcdoc: 'srcDoc',
  srclang: 'srcLang',
  srcset: 'srcSet',
  start: 'start',
  step: 'step',
  style: 'style',
  summary: 'summary',
  tabindex: 'tabIndex',
  target: 'target',
  title: 'title',
  type: 'type',
  usemap: 'useMap',
  value: 'value',
  width: 'width',
  wmode: 'wmode',
  wrap: 'wrap',
  // SVG
  about: 'about',
  accentheight: 'accentHeight',
  'accent-height': 'accentHeight',
  accumulate: 'accumulate',
  additive: 'additive',
  alignmentbaseline: 'alignmentBaseline',
  'alignment-baseline': 'alignmentBaseline',
  allowreorder: 'allowReorder',
  alphabetic: 'alphabetic',
  amplitude: 'amplitude',
  arabicform: 'arabicForm',
  'arabic-form': 'arabicForm',
  ascent: 'ascent',
  attributename: 'attributeName',
  attributetype: 'attributeType',
  autoreverse: 'autoReverse',
  azimuth: 'azimuth',
  basefrequency: 'baseFrequency',
  baselineshift: 'baselineShift',
  'baseline-shift': 'baselineShift',
  baseprofile: 'baseProfile',
  bbox: 'bbox',
  begin: 'begin',
  bias: 'bias',
  by: 'by',
  calcmode: 'calcMode',
  capheight: 'capHeight',
  'cap-height': 'capHeight',
  clip: 'clip',
  clippath: 'clipPath',
  'clip-path': 'clipPath',
  clippathunits: 'clipPathUnits',
  cliprule: 'clipRule',
  'clip-rule': 'clipRule',
  color: 'color',
  colorinterpolation: 'colorInterpolation',
  'color-interpolation': 'colorInterpolation',
  colorinterpolationfilters: 'colorInterpolationFilters',
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorprofile: 'colorProfile',
  'color-profile': 'colorProfile',
  colorrendering: 'colorRendering',
  'color-rendering': 'colorRendering',
  contentscripttype: 'contentScriptType',
  contentstyletype: 'contentStyleType',
  cursor: 'cursor',
  cx: 'cx',
  cy: 'cy',
  d: 'd',
  datatype: 'datatype',
  decelerate: 'decelerate',
  descent: 'descent',
  diffuseconstant: 'diffuseConstant',
  direction: 'direction',
  display: 'display',
  divisor: 'divisor',
  dominantbaseline: 'dominantBaseline',
  'dominant-baseline': 'dominantBaseline',
  dur: 'dur',
  dx: 'dx',
  dy: 'dy',
  edgemode: 'edgeMode',
  elevation: 'elevation',
  enablebackground: 'enableBackground',
  'enable-background': 'enableBackground',
  end: 'end',
  exponent: 'exponent',
  externalresourcesrequired: 'externalResourcesRequired',
  fill: 'fill',
  fillopacity: 'fillOpacity',
  'fill-opacity': 'fillOpacity',
  fillrule: 'fillRule',
  'fill-rule': 'fillRule',
  filter: 'filter',
  filterres: 'filterRes',
  filterunits: 'filterUnits',
  floodopacity: 'floodOpacity',
  'flood-opacity': 'floodOpacity',
  floodcolor: 'floodColor',
  'flood-color': 'floodColor',
  focusable: 'focusable',
  fontfamily: 'fontFamily',
  'font-family': 'fontFamily',
  fontsize: 'fontSize',
  'font-size': 'fontSize',
  fontsizeadjust: 'fontSizeAdjust',
  'font-size-adjust': 'fontSizeAdjust',
  fontstretch: 'fontStretch',
  'font-stretch': 'fontStretch',
  fontstyle: 'fontStyle',
  'font-style': 'fontStyle',
  fontvariant: 'fontVariant',
  'font-variant': 'fontVariant',
  fontweight: 'fontWeight',
  'font-weight': 'fontWeight',
  format: 'format',
  from: 'from',
  fx: 'fx',
  fy: 'fy',
  g1: 'g1',
  g2: 'g2',
  glyphname: 'glyphName',
  'glyph-name': 'glyphName',
  glyphorientationhorizontal: 'glyphOrientationHorizontal',
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphorientationvertical: 'glyphOrientationVertical',
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphref: 'glyphRef',
  gradienttransform: 'gradientTransform',
  gradientunits: 'gradientUnits',
  hanging: 'hanging',
  horizadvx: 'horizAdvX',
  'horiz-adv-x': 'horizAdvX',
  horizoriginx: 'horizOriginX',
  'horiz-origin-x': 'horizOriginX',
  ideographic: 'ideographic',
  imagerendering: 'imageRendering',
  'image-rendering': 'imageRendering',
  in2: 'in2',
  in: 'in',
  inlist: 'inlist',
  intercept: 'intercept',
  k1: 'k1',
  k2: 'k2',
  k3: 'k3',
  k4: 'k4',
  k: 'k',
  kernelmatrix: 'kernelMatrix',
  kernelunitlength: 'kernelUnitLength',
  kerning: 'kerning',
  keypoints: 'keyPoints',
  keysplines: 'keySplines',
  keytimes: 'keyTimes',
  lengthadjust: 'lengthAdjust',
  letterspacing: 'letterSpacing',
  'letter-spacing': 'letterSpacing',
  lightingcolor: 'lightingColor',
  'lighting-color': 'lightingColor',
  limitingconeangle: 'limitingConeAngle',
  local: 'local',
  markerend: 'markerEnd',
  'marker-end': 'markerEnd',
  markerheight: 'markerHeight',
  markermid: 'markerMid',
  'marker-mid': 'markerMid',
  markerstart: 'markerStart',
  'marker-start': 'markerStart',
  markerunits: 'markerUnits',
  markerwidth: 'markerWidth',
  mask: 'mask',
  maskcontentunits: 'maskContentUnits',
  maskunits: 'maskUnits',
  mathematical: 'mathematical',
  mode: 'mode',
  numoctaves: 'numOctaves',
  offset: 'offset',
  opacity: 'opacity',
  operator: 'operator',
  order: 'order',
  orient: 'orient',
  orientation: 'orientation',
  origin: 'origin',
  overflow: 'overflow',
  overlineposition: 'overlinePosition',
  'overline-position': 'overlinePosition',
  overlinethickness: 'overlineThickness',
  'overline-thickness': 'overlineThickness',
  paintorder: 'paintOrder',
  'paint-order': 'paintOrder',
  panose1: 'panose1',
  'panose-1': 'panose1',
  pathlength: 'pathLength',
  patterncontentunits: 'patternContentUnits',
  patterntransform: 'patternTransform',
  patternunits: 'patternUnits',
  pointerevents: 'pointerEvents',
  'pointer-events': 'pointerEvents',
  points: 'points',
  pointsatx: 'pointsAtX',
  pointsaty: 'pointsAtY',
  pointsatz: 'pointsAtZ',
  prefix: 'prefix',
  preservealpha: 'preserveAlpha',
  preserveaspectratio: 'preserveAspectRatio',
  primitiveunits: 'primitiveUnits',
  property: 'property',
  r: 'r',
  radius: 'radius',
  refx: 'refX',
  refy: 'refY',
  renderingintent: 'renderingIntent',
  'rendering-intent': 'renderingIntent',
  repeatcount: 'repeatCount',
  repeatdur: 'repeatDur',
  requiredextensions: 'requiredExtensions',
  requiredfeatures: 'requiredFeatures',
  resource: 'resource',
  restart: 'restart',
  result: 'result',
  results: 'results',
  rotate: 'rotate',
  rx: 'rx',
  ry: 'ry',
  scale: 'scale',
  security: 'security',
  seed: 'seed',
  shaperendering: 'shapeRendering',
  'shape-rendering': 'shapeRendering',
  slope: 'slope',
  spacing: 'spacing',
  specularconstant: 'specularConstant',
  specularexponent: 'specularExponent',
  speed: 'speed',
  spreadmethod: 'spreadMethod',
  startoffset: 'startOffset',
  stddeviation: 'stdDeviation',
  stemh: 'stemh',
  stemv: 'stemv',
  stitchtiles: 'stitchTiles',
  stopcolor: 'stopColor',
  'stop-color': 'stopColor',
  stopopacity: 'stopOpacity',
  'stop-opacity': 'stopOpacity',
  strikethroughposition: 'strikethroughPosition',
  'strikethrough-position': 'strikethroughPosition',
  strikethroughthickness: 'strikethroughThickness',
  'strikethrough-thickness': 'strikethroughThickness',
  string: 'string',
  stroke: 'stroke',
  strokedasharray: 'strokeDasharray',
  'stroke-dasharray': 'strokeDasharray',
  strokedashoffset: 'strokeDashoffset',
  'stroke-dashoffset': 'strokeDashoffset',
  strokelinecap: 'strokeLinecap',
  'stroke-linecap': 'strokeLinecap',
  strokelinejoin: 'strokeLinejoin',
  'stroke-linejoin': 'strokeLinejoin',
  strokemiterlimit: 'strokeMiterlimit',
  'stroke-miterlimit': 'strokeMiterlimit',
  strokewidth: 'strokeWidth',
  'stroke-width': 'strokeWidth',
  strokeopacity: 'strokeOpacity',
  'stroke-opacity': 'strokeOpacity',
  suppresscontenteditablewarning: 'suppressContentEditableWarning',
  suppresshydrationwarning: 'suppressHydrationWarning',
  surfacescale: 'surfaceScale',
  systemlanguage: 'systemLanguage',
  tablevalues: 'tableValues',
  targetx: 'targetX',
  targety: 'targetY',
  textanchor: 'textAnchor',
  'text-anchor': 'textAnchor',
  textdecoration: 'textDecoration',
  'text-decoration': 'textDecoration',
  textlength: 'textLength',
  textrendering: 'textRendering',
  'text-rendering': 'textRendering',
  to: 'to',
  transform: 'transform',
  typeof: 'typeof',
  u1: 'u1',
  u2: 'u2',
  underlineposition: 'underlinePosition',
  'underline-position': 'underlinePosition',
  underlinethickness: 'underlineThickness',
  'underline-thickness': 'underlineThickness',
  unicode: 'unicode',
  unicodebidi: 'unicodeBidi',
  'unicode-bidi': 'unicodeBidi',
  unicoderange: 'unicodeRange',
  'unicode-range': 'unicodeRange',
  unitsperem: 'unitsPerEm',
  'units-per-em': 'unitsPerEm',
  unselectable: 'unselectable',
  valphabetic: 'vAlphabetic',
  'v-alphabetic': 'vAlphabetic',
  values: 'values',
  vectoreffect: 'vectorEffect',
  'vector-effect': 'vectorEffect',
  version: 'version',
  vertadvy: 'vertAdvY',
  'vert-adv-y': 'vertAdvY',
  vertoriginx: 'vertOriginX',
  'vert-origin-x': 'vertOriginX',
  vertoriginy: 'vertOriginY',
  'vert-origin-y': 'vertOriginY',
  vhanging: 'vHanging',
  'v-hanging': 'vHanging',
  videographic: 'vIdeographic',
  'v-ideographic': 'vIdeographic',
  viewbox: 'viewBox',
  viewtarget: 'viewTarget',
  visibility: 'visibility',
  vmathematical: 'vMathematical',
  'v-mathematical': 'vMathematical',
  vocab: 'vocab',
  widths: 'widths',
  wordspacing: 'wordSpacing',
  'word-spacing': 'wordSpacing',
  writingmode: 'writingMode',
  'writing-mode': 'writingMode',
  x1: 'x1',
  x2: 'x2',
  x: 'x',
  xchannelselector: 'xChannelSelector',
  xheight: 'xHeight',
  'x-height': 'xHeight',
  xlinkactuate: 'xlinkActuate',
  'xlink:actuate': 'xlinkActuate',
  xlinkarcrole: 'xlinkArcrole',
  'xlink:arcrole': 'xlinkArcrole',
  xlinkhref: 'xlinkHref',
  'xlink:href': 'xlinkHref',
  xlinkrole: 'xlinkRole',
  'xlink:role': 'xlinkRole',
  xlinkshow: 'xlinkShow',
  'xlink:show': 'xlinkShow',
  xlinktitle: 'xlinkTitle',
  'xlink:title': 'xlinkTitle',
  xlinktype: 'xlinkType',
  'xlink:type': 'xlinkType',
  xmlbase: 'xmlBase',
  'xml:base': 'xmlBase',
  xmllang: 'xmlLang',
  'xml:lang': 'xmlLang',
  xmlns: 'xmlns',
  'xml:space': 'xmlSpace',
  xmlnsxlink: 'xmlnsXlink',
  'xmlns:xlink': 'xmlnsXlink',
  xmlspace: 'xmlSpace',
  y1: 'y1',
  y2: 'y2',
  y: 'y',
  ychannelselector: 'yChannelSelector',
  z: 'z',
  zoomandpan: 'zoomAndPan'
};

var validateProperty$1 = function () {};

{
  var warnedProperties$1 = {};
  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  var EVENT_NAME_REGEX = /^on./;
  var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
  var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
  var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

  validateProperty$1 = function (tagName, name, value, canUseEventSystem) {
    if (_hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
      return true;
    }

    var lowerCasedName = name.toLowerCase();

    if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
      warning$1(false, 'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');
      warnedProperties$1[name] = true;
      return true;
    } // We can't rely on the event system being injected on the server.


    if (canUseEventSystem) {
      if (registrationNameModules.hasOwnProperty(name)) {
        return true;
      }

      var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;

      if (registrationName != null) {
        warning$1(false, 'Invalid event handler property `%s`. Did you mean `%s`?', name, registrationName);
        warnedProperties$1[name] = true;
        return true;
      }

      if (EVENT_NAME_REGEX.test(name)) {
        warning$1(false, 'Unknown event handler property `%s`. It will be ignored.', name);
        warnedProperties$1[name] = true;
        return true;
      }
    } else if (EVENT_NAME_REGEX.test(name)) {
      // If no event plugins have been injected, we are in a server environment.
      // So we can't tell if the event name is correct for sure, but we can filter
      // out known bad ones like `onclick`. We can't suggest a specific replacement though.
      if (INVALID_EVENT_NAME_REGEX.test(name)) {
        warning$1(false, 'Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.', name);
      }

      warnedProperties$1[name] = true;
      return true;
    } // Let the ARIA attribute hook validate ARIA attributes


    if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
      return true;
    }

    if (lowerCasedName === 'innerhtml') {
      warning$1(false, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');
      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'aria') {
      warning$1(false, 'The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');
      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
      warning$1(false, 'Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.', typeof value);
      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'number' && isNaN(value)) {
      warning$1(false, 'Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.', name);
      warnedProperties$1[name] = true;
      return true;
    }

    var propertyInfo = getPropertyInfo(name);
    var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED; // Known attributes should match the casing specified in the property config.

    if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
      var standardName = possibleStandardNames[lowerCasedName];

      if (standardName !== name) {
        warning$1(false, 'Invalid DOM property `%s`. Did you mean `%s`?', name, standardName);
        warnedProperties$1[name] = true;
        return true;
      }
    } else if (!isReserved && name !== lowerCasedName) {
      // Unknown attributes should have lowercase casing since that's how they
      // will be cased anyway with server rendering.
      warning$1(false, 'React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.', name, lowerCasedName);
      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'boolean' && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      if (value) {
        warning$1(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.', value, name, name, value, name);
      } else {
        warning$1(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
      }

      warnedProperties$1[name] = true;
      return true;
    } // Now that we've validated casing, do not validate
    // data types for reserved props


    if (isReserved) {
      return true;
    } // Warn when a known attribute is a bad type


    if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      warnedProperties$1[name] = true;
      return false;
    } // Warn when passing the strings 'false' or 'true' into a boolean prop


    if ((value === 'false' || value === 'true') && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
      warning$1(false, 'Received the string `%s` for the boolean attribute `%s`. ' + '%s ' + 'Did you mean %s={%s}?', value, name, value === 'false' ? 'The browser will interpret it as a truthy value.' : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
      warnedProperties$1[name] = true;
      return true;
    }

    return true;
  };
}

var warnUnknownProperties = function (type, props, canUseEventSystem) {
  var unknownProps = [];

  for (var key in props) {
    var isValid = validateProperty$1(type, key, props[key], canUseEventSystem);

    if (!isValid) {
      unknownProps.push(key);
    }
  }

  var unknownPropString = unknownProps.map(function (prop) {
    return '`' + prop + '`';
  }).join(', ');

  if (unknownProps.length === 1) {
    warning$1(false, 'Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior', unknownPropString, type);
  } else if (unknownProps.length > 1) {
    warning$1(false, 'Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior', unknownPropString, type);
  }
};

function validateProperties$2(type, props, canUseEventSystem) {
  if (isCustomComponent(type, props)) {
    return;
  }

  warnUnknownProperties(type, props, canUseEventSystem);
}

var toArray = React.Children.toArray; // This is only used in DEV.
// Each entry is `this.stack` from a currently executing renderer instance.
// (There may be more than one because ReactDOMServer is reentrant).
// Each stack is an array of frames which may contain nested stacks of elements.

var currentDebugStacks = [];
var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var ReactDebugCurrentFrame;
var prevGetCurrentStackImpl = null;

var getCurrentServerStackImpl = function () {
  return '';
};

var describeStackFrame = function (element) {
  return '';
};

var validatePropertiesInDevelopment = function (type, props) {};

var pushCurrentDebugStack = function (stack) {};

var pushElementToDebugStack = function (element) {};

var popCurrentDebugStack = function () {};

var hasWarnedAboutUsingContextAsConsumer = false;

{
  ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

  validatePropertiesInDevelopment = function (type, props) {
    validateProperties(type, props);
    validateProperties$1(type, props);
    validateProperties$2(type, props,
    /* canUseEventSystem */
    false);
  };

  describeStackFrame = function (element) {
    var source = element._source;
    var type = element.type;
    var name = getComponentName(type);
    var ownerName = null;
    return describeComponentFrame(name, source, ownerName);
  };

  pushCurrentDebugStack = function (stack) {
    currentDebugStacks.push(stack);

    if (currentDebugStacks.length === 1) {
      // We are entering a server renderer.
      // Remember the previous (e.g. client) global stack implementation.
      prevGetCurrentStackImpl = ReactDebugCurrentFrame.getCurrentStack;
      ReactDebugCurrentFrame.getCurrentStack = getCurrentServerStackImpl;
    }
  };

  pushElementToDebugStack = function (element) {
    // For the innermost executing ReactDOMServer call,
    var stack = currentDebugStacks[currentDebugStacks.length - 1]; // Take the innermost executing frame (e.g. <Foo>),

    var frame = stack[stack.length - 1]; // and record that it has one more element associated with it.

    frame.debugElementStack.push(element); // We only need this because we tail-optimize single-element
    // children and directly handle them in an inner loop instead of
    // creating separate frames for them.
  };

  popCurrentDebugStack = function () {
    currentDebugStacks.pop();

    if (currentDebugStacks.length === 0) {
      // We are exiting the server renderer.
      // Restore the previous (e.g. client) global stack implementation.
      ReactDebugCurrentFrame.getCurrentStack = prevGetCurrentStackImpl;
      prevGetCurrentStackImpl = null;
    }
  };

  getCurrentServerStackImpl = function () {
    if (currentDebugStacks.length === 0) {
      // Nothing is currently rendering.
      return '';
    } // ReactDOMServer is reentrant so there may be multiple calls at the same time.
    // Take the frames from the innermost call which is the last in the array.


    var frames = currentDebugStacks[currentDebugStacks.length - 1];
    var stack = ''; // Go through every frame in the stack from the innermost one.

    for (var i = frames.length - 1; i >= 0; i--) {
      var frame = frames[i]; // Every frame might have more than one debug element stack entry associated with it.
      // This is because single-child nesting doesn't create materialized frames.
      // Instead it would push them through `pushElementToDebugStack()`.

      var debugElementStack = frame.debugElementStack;

      for (var ii = debugElementStack.length - 1; ii >= 0; ii--) {
        stack += describeStackFrame(debugElementStack[ii]);
      }
    }

    return stack;
  };
}

var didWarnDefaultInputValue = false;
var didWarnDefaultChecked = false;
var didWarnDefaultSelectValue = false;
var didWarnDefaultTextareaValue = false;
var didWarnInvalidOptionChildren = false;
var didWarnAboutNoopUpdateForComponent = {};
var didWarnAboutBadClass = {};
var didWarnAboutModulePatternComponent = {};
var didWarnAboutDeprecatedWillMount = {};
var didWarnAboutUndefinedDerivedState = {};
var didWarnAboutUninitializedState = {};
var valuePropNames = ['value', 'defaultValue'];
var newlineEatingTags = {
  listing: true,
  pre: true,
  textarea: true
}; // We accept any tag to be rendered but since this gets injected into arbitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name

var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset

var validatedTagCache = {};

function validateDangerousTag(tag) {
  if (!validatedTagCache.hasOwnProperty(tag)) {
    if (!VALID_TAG_REGEX.test(tag)) {
      {
        throw Error("Invalid tag: " + tag);
      }
    }

    validatedTagCache[tag] = true;
  }
}

var styleNameCache = {};

var processStyleName = function (styleName) {
  if (styleNameCache.hasOwnProperty(styleName)) {
    return styleNameCache[styleName];
  }

  var result = hyphenateStyleName(styleName);
  styleNameCache[styleName] = result;
  return result;
};

function createMarkupForStyles(styles) {
  var serialized = '';
  var delimiter = '';

  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }

    var isCustomProperty = styleName.indexOf('--') === 0;
    var styleValue = styles[styleName];

    {
      if (!isCustomProperty) {
        warnValidStyle$1(styleName, styleValue);
      }
    }

    if (styleValue != null) {
      serialized += delimiter + (isCustomProperty ? styleName : processStyleName(styleName)) + ':';
      serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);
      delimiter = ';';
    }
  }

  return serialized || null;
}

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && getComponentName(_constructor) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;

    if (didWarnAboutNoopUpdateForComponent[warningKey]) {
      return;
    }

    warningWithoutStack$1(false, '%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);
    didWarnAboutNoopUpdateForComponent[warningKey] = true;
  }
}

function shouldConstruct(Component) {
  return Component.prototype && Component.prototype.isReactComponent;
}

function getNonChildrenInnerMarkup(props) {
  var innerHTML = props.dangerouslySetInnerHTML;

  if (innerHTML != null) {
    if (innerHTML.__html != null) {
      return innerHTML.__html;
    }
  } else {
    var content = props.children;

    if (typeof content === 'string' || typeof content === 'number') {
      return escapeTextForBrowser(content);
    }
  }

  return null;
}

function flattenTopLevelChildren(children) {
  if (!React.isValidElement(children)) {
    return toArray(children);
  }

  var element = children;

  if (element.type !== REACT_FRAGMENT_TYPE) {
    return [element];
  }

  var fragmentChildren = element.props.children;

  if (!React.isValidElement(fragmentChildren)) {
    return toArray(fragmentChildren);
  }

  var fragmentChildElement = fragmentChildren;
  return [fragmentChildElement];
}

function flattenOptionChildren(children) {
  if (children === undefined || children === null) {
    return children;
  }

  var content = ''; // Flatten children and warn if they aren't strings or numbers;
  // invalid types are ignored.

  React.Children.forEach(children, function (child) {
    if (child == null) {
      return;
    }

    content += child;

    {
      if (!didWarnInvalidOptionChildren && typeof child !== 'string' && typeof child !== 'number') {
        didWarnInvalidOptionChildren = true;
        warning$1(false, 'Only strings and numbers are supported as <option> children.');
      }
    }
  });
  return content;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var STYLE = 'style';
var RESERVED_PROPS = {
  children: null,
  dangerouslySetInnerHTML: null,
  suppressContentEditableWarning: null,
  suppressHydrationWarning: null
};

function createOpenTagMarkup(tagVerbatim, tagLowercase, props, namespace, makeStaticMarkup, isRootElement) {
  var ret = '<' + tagVerbatim;

  for (var propKey in props) {
    if (!hasOwnProperty.call(props, propKey)) {
      continue;
    }

    if (enableFlareAPI && propKey === 'listeners') {
      continue;
    }

    var propValue = props[propKey];

    if (propValue == null) {
      continue;
    }

    if (propKey === STYLE) {
      propValue = createMarkupForStyles(propValue);
    }

    var markup = null;

    if (isCustomComponent(tagLowercase, props)) {
      if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
        markup = createMarkupForCustomAttribute(propKey, propValue);
      }
    } else {
      markup = createMarkupForProperty(propKey, propValue);
    }

    if (markup) {
      ret += ' ' + markup;
    }
  } // For static pages, no need to put React ID and checksum. Saves lots of
  // bytes.


  if (makeStaticMarkup) {
    return ret;
  }

  if (isRootElement) {
    ret += ' ' + createMarkupForRoot();
  }

  return ret;
}

function validateRenderResult(child, type) {
  if (child === undefined) {
    {
      {
        throw Error((getComponentName(type) || 'Component') + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
      }
    }
  }
}

function resolve(child, context, threadID) {
  while (React.isValidElement(child)) {
    // Safe because we just checked it's an element.
    var element = child;
    var Component = element.type;

    {
      pushElementToDebugStack(element);
    }

    if (typeof Component !== 'function') {
      break;
    }

    processChild(element, Component);
  } // Extra closure so queue and replace can be captured properly


  function processChild(element, Component) {
    var isClass = shouldConstruct(Component);
    var publicContext = processContext(Component, context, threadID, isClass);
    var queue = [];
    var replace = false;
    var updater = {
      isMounted: function (publicInstance) {
        return false;
      },
      enqueueForceUpdate: function (publicInstance) {
        if (queue === null) {
          warnNoop(publicInstance, 'forceUpdate');
          return null;
        }
      },
      enqueueReplaceState: function (publicInstance, completeState) {
        replace = true;
        queue = [completeState];
      },
      enqueueSetState: function (publicInstance, currentPartialState) {
        if (queue === null) {
          warnNoop(publicInstance, 'setState');
          return null;
        }

        queue.push(currentPartialState);
      }
    };
    var inst;

    if (isClass) {
      inst = new Component(element.props, publicContext, updater);

      if (typeof Component.getDerivedStateFromProps === 'function') {
        {
          if (inst.state === null || inst.state === undefined) {
            var componentName = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutUninitializedState[componentName]) {
              warningWithoutStack$1(false, '`%s` uses `getDerivedStateFromProps` but its initial state is ' + '%s. This is not recommended. Instead, define the initial state by ' + 'assigning an object to `this.state` in the constructor of `%s`. ' + 'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.', componentName, inst.state === null ? 'null' : 'undefined', componentName);
              didWarnAboutUninitializedState[componentName] = true;
            }
          }
        }

        var partialState = Component.getDerivedStateFromProps.call(null, element.props, inst.state);

        {
          if (partialState === undefined) {
            var _componentName = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutUndefinedDerivedState[_componentName]) {
              warningWithoutStack$1(false, '%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', _componentName);
              didWarnAboutUndefinedDerivedState[_componentName] = true;
            }
          }
        }

        if (partialState != null) {
          inst.state = _assign({}, inst.state, partialState);
        }
      }
    } else {
      {
        if (Component.prototype && typeof Component.prototype.render === 'function') {
          var _componentName2 = getComponentName(Component) || 'Unknown';

          if (!didWarnAboutBadClass[_componentName2]) {
            warningWithoutStack$1(false, "The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', _componentName2, _componentName2);
            didWarnAboutBadClass[_componentName2] = true;
          }
        }
      }

      var componentIdentity = {};
      prepareToUseHooks(componentIdentity);
      inst = Component(element.props, publicContext, updater);
      inst = finishHooks(Component, element.props, inst, publicContext);

      if (inst == null || inst.render == null) {
        child = inst;
        validateRenderResult(child, Component);
        return;
      }

      {
        var _componentName3 = getComponentName(Component) || 'Unknown';

        if (!didWarnAboutModulePatternComponent[_componentName3]) {
          warningWithoutStack$1(false, 'The <%s /> component appears to be a function component that returns a class instance. ' + 'Change %s to a class that extends React.Component instead. ' + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + 'cannot be called with `new` by React.', _componentName3, _componentName3, _componentName3);
          didWarnAboutModulePatternComponent[_componentName3] = true;
        }
      }
    }

    inst.props = element.props;
    inst.context = publicContext;
    inst.updater = updater;
    var initialState = inst.state;

    if (initialState === undefined) {
      inst.state = initialState = null;
    }

    if (typeof inst.UNSAFE_componentWillMount === 'function' || typeof inst.componentWillMount === 'function') {
      if (typeof inst.componentWillMount === 'function') {
        {
          if (warnAboutDeprecatedLifecycles && inst.componentWillMount.__suppressDeprecationWarning !== true) {
            var _componentName4 = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutDeprecatedWillMount[_componentName4]) {
              lowPriorityWarningWithoutStack$1(false, // keep this warning in sync with ReactStrictModeWarning.js
              'componentWillMount has been renamed, and is not recommended for use. ' + 'See https://fb.me/react-unsafe-component-lifecycles for details.\n\n' + '* Move code from componentWillMount to componentDidMount (preferred in most cases) ' + 'or the constructor.\n' + '\nPlease update the following components: %s', _componentName4);
              didWarnAboutDeprecatedWillMount[_componentName4] = true;
            }
          }
        } // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.


        if (typeof Component.getDerivedStateFromProps !== 'function') {
          inst.componentWillMount();
        }
      }

      if (typeof inst.UNSAFE_componentWillMount === 'function' && typeof Component.getDerivedStateFromProps !== 'function') {
        // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.
        inst.UNSAFE_componentWillMount();
      }

      if (queue.length) {
        var oldQueue = queue;
        var oldReplace = replace;
        queue = null;
        replace = false;

        if (oldReplace && oldQueue.length === 1) {
          inst.state = oldQueue[0];
        } else {
          var nextState = oldReplace ? oldQueue[0] : inst.state;
          var dontMutate = true;

          for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
            var partial = oldQueue[i];

            var _partialState = typeof partial === 'function' ? partial.call(inst, nextState, element.props, publicContext) : partial;

            if (_partialState != null) {
              if (dontMutate) {
                dontMutate = false;
                nextState = _assign({}, nextState, _partialState);
              } else {
                _assign(nextState, _partialState);
              }
            }
          }

          inst.state = nextState;
        }
      } else {
        queue = null;
      }
    }

    child = inst.render();

    {
      if (child === undefined && inst.render._isMockFunction) {
        // This is probably bad practice. Consider warning here and
        // deprecating this convenience.
        child = null;
      }
    }

    validateRenderResult(child, Component);
    var childContext;

    if (disableLegacyContext) {
      {
        var childContextTypes = Component.childContextTypes;

        if (childContextTypes !== undefined) {
          warningWithoutStack$1(false, '%s uses the legacy childContextTypes API which is no longer supported. ' + 'Use React.createContext() instead.', getComponentName(Component) || 'Unknown');
        }
      }
    } else {
      if (typeof inst.getChildContext === 'function') {
        var _childContextTypes = Component.childContextTypes;

        if (typeof _childContextTypes === 'object') {
          childContext = inst.getChildContext();

          for (var contextKey in childContext) {
            if (!(contextKey in _childContextTypes)) {
              {
                throw Error((getComponentName(Component) || 'Unknown') + ".getChildContext(): key \"" + contextKey + "\" is not defined in childContextTypes.");
              }
            }
          }
        } else {
          warningWithoutStack$1(false, '%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', getComponentName(Component) || 'Unknown');
        }
      }

      if (childContext) {
        context = _assign({}, context, childContext);
      }
    }
  }

  return {
    child: child,
    context: context
  };
}

var ReactDOMServerRenderer =
/*#__PURE__*/
function () {
  // TODO: type this more strictly:
  // DEV-only
  function ReactDOMServerRenderer(children, makeStaticMarkup) {
    var flatChildren = flattenTopLevelChildren(children);
    var topFrame = {
      type: null,
      // Assume all trees start in the HTML namespace (not totally true, but
      // this is what we did historically)
      domNamespace: Namespaces.html,
      children: flatChildren,
      childIndex: 0,
      context: emptyObject,
      footer: ''
    };

    {
      topFrame.debugElementStack = [];
    }

    this.threadID = allocThreadID();
    this.stack = [topFrame];
    this.exhausted = false;
    this.currentSelectValue = null;
    this.previousWasTextNode = false;
    this.makeStaticMarkup = makeStaticMarkup;
    this.suspenseDepth = 0; // Context (new API)

    this.contextIndex = -1;
    this.contextStack = [];
    this.contextValueStack = [];

    {
      this.contextProviderStack = [];
    }
  }

  var _proto = ReactDOMServerRenderer.prototype;

  _proto.destroy = function destroy() {
    if (!this.exhausted) {
      this.exhausted = true;
      this.clearProviders();
      freeThreadID(this.threadID);
    }
  }
  /**
   * Note: We use just two stacks regardless of how many context providers you have.
   * Providers are always popped in the reverse order to how they were pushed
   * so we always know on the way down which provider you'll encounter next on the way up.
   * On the way down, we push the current provider, and its context value *before*
   * we mutated it, onto the stacks. Therefore, on the way up, we always know which
   * provider needs to be "restored" to which value.
   * https://github.com/facebook/react/pull/12985#issuecomment-396301248
   */
  ;

  _proto.pushProvider = function pushProvider(provider) {
    var index = ++this.contextIndex;
    var context = provider.type._context;
    var threadID = this.threadID;
    validateContextBounds(context, threadID);
    var previousValue = context[threadID]; // Remember which value to restore this context to on our way up.

    this.contextStack[index] = context;
    this.contextValueStack[index] = previousValue;

    {
      // Only used for push/pop mismatch warnings.
      this.contextProviderStack[index] = provider;
    } // Mutate the current value.


    context[threadID] = provider.props.value;
  };

  _proto.popProvider = function popProvider(provider) {
    var index = this.contextIndex;

    {
      !(index > -1 && provider === this.contextProviderStack[index]) ? warningWithoutStack$1(false, 'Unexpected pop.') : void 0;
    }

    var context = this.contextStack[index];
    var previousValue = this.contextValueStack[index]; // "Hide" these null assignments from Flow by using `any`
    // because conceptually they are deletions--as long as we
    // promise to never access values beyond `this.contextIndex`.

    this.contextStack[index] = null;
    this.contextValueStack[index] = null;

    {
      this.contextProviderStack[index] = null;
    }

    this.contextIndex--; // Restore to the previous value we stored as we were walking down.
    // We've already verified that this context has been expanded to accommodate
    // this thread id, so we don't need to do it again.

    context[this.threadID] = previousValue;
  };

  _proto.clearProviders = function clearProviders() {
    // Restore any remaining providers on the stack to previous values
    for (var index = this.contextIndex; index >= 0; index--) {
      var context = this.contextStack[index];
      var previousValue = this.contextValueStack[index];
      context[this.threadID] = previousValue;
    }
  };

  _proto.read = function read(bytes) {
    if (this.exhausted) {
      return null;
    }

    var prevThreadID = currentThreadID;
    setCurrentThreadID(this.threadID);
    var prevDispatcher = ReactCurrentDispatcher.current;
    ReactCurrentDispatcher.current = Dispatcher;

    try {
      // Markup generated within <Suspense> ends up buffered until we know
      // nothing in that boundary suspended
      var out = [''];
      var suspended = false;

      while (out[0].length < bytes) {
        if (this.stack.length === 0) {
          this.exhausted = true;
          freeThreadID(this.threadID);
          break;
        }

        var frame = this.stack[this.stack.length - 1];

        if (suspended || frame.childIndex >= frame.children.length) {
          var footer = frame.footer;

          if (footer !== '') {
            this.previousWasTextNode = false;
          }

          this.stack.pop();

          if (frame.type === 'select') {
            this.currentSelectValue = null;
          } else if (frame.type != null && frame.type.type != null && frame.type.type.$$typeof === REACT_PROVIDER_TYPE) {
            var provider = frame.type;
            this.popProvider(provider);
          } else if (frame.type === REACT_SUSPENSE_TYPE) {
            this.suspenseDepth--;
            var buffered = out.pop();

            if (suspended) {
              suspended = false; // If rendering was suspended at this boundary, render the fallbackFrame

              var fallbackFrame = frame.fallbackFrame;

              if (!fallbackFrame) {
                {
                  throw Error("ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue.");
                }
              }

              this.stack.push(fallbackFrame);
              out[this.suspenseDepth] += '<!--$!-->'; // Skip flushing output since we're switching to the fallback

              continue;
            } else {
              out[this.suspenseDepth] += buffered;
            }
          } // Flush output


          out[this.suspenseDepth] += footer;
          continue;
        }

        var child = frame.children[frame.childIndex++];
        var outBuffer = '';

        {
          pushCurrentDebugStack(this.stack); // We're starting work on this frame, so reset its inner stack.

          frame.debugElementStack.length = 0;
        }

        try {
          outBuffer += this.render(child, frame.context, frame.domNamespace);
        } catch (err) {
          if (err != null && typeof err.then === 'function') {
            if (enableSuspenseServerRenderer) {
              if (!(this.suspenseDepth > 0)) {
                {
                  throw Error("A React component suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
                }
              }

              suspended = true;
            } else {
              {
                {
                  throw Error("ReactDOMServer does not yet support Suspense.");
                }
              }
            }
          } else {
            throw err;
          }
        } finally {
          {
            popCurrentDebugStack();
          }
        }

        if (out.length <= this.suspenseDepth) {
          out.push('');
        }

        out[this.suspenseDepth] += outBuffer;
      }

      return out[0];
    } finally {
      ReactCurrentDispatcher.current = prevDispatcher;
      setCurrentThreadID(prevThreadID);
    }
  };

  _proto.render = function render(child, context, parentNamespace) {
    if (typeof child === 'string' || typeof child === 'number') {
      var text = '' + child;

      if (text === '') {
        return '';
      }

      if (this.makeStaticMarkup) {
        return escapeTextForBrowser(text);
      }

      if (this.previousWasTextNode) {
        return '<!-- -->' + escapeTextForBrowser(text);
      }

      this.previousWasTextNode = true;
      return escapeTextForBrowser(text);
    } else {
      var nextChild;

      var _resolve = resolve(child, context, this.threadID);

      nextChild = _resolve.child;
      context = _resolve.context;

      if (nextChild === null || nextChild === false) {
        return '';
      } else if (!React.isValidElement(nextChild)) {
        if (nextChild != null && nextChild.$$typeof != null) {
          // Catch unexpected special types early.
          var $$typeof = nextChild.$$typeof;

          if (!($$typeof !== REACT_PORTAL_TYPE)) {
            {
              throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
            }
          } // Catch-all to prevent an infinite loop if React.Children.toArray() supports some new type.


          {
            {
              throw Error("Unknown element-like object type: " + $$typeof.toString() + ". This is likely a bug in React. Please file an issue.");
            }
          }
        }

        var nextChildren = toArray(nextChild);
        var frame = {
          type: null,
          domNamespace: parentNamespace,
          children: nextChildren,
          childIndex: 0,
          context: context,
          footer: ''
        };

        {
          frame.debugElementStack = [];
        }

        this.stack.push(frame);
        return '';
      } // Safe because we just checked it's an element.


      var nextElement = nextChild;
      var elementType = nextElement.type;

      if (typeof elementType === 'string') {
        return this.renderDOM(nextElement, context, parentNamespace);
      }

      switch (elementType) {
        case REACT_STRICT_MODE_TYPE:
        case REACT_CONCURRENT_MODE_TYPE:
        case REACT_PROFILER_TYPE:
        case REACT_SUSPENSE_LIST_TYPE:
        case REACT_FRAGMENT_TYPE:
          {
            var _nextChildren = toArray(nextChild.props.children);

            var _frame = {
              type: null,
              domNamespace: parentNamespace,
              children: _nextChildren,
              childIndex: 0,
              context: context,
              footer: ''
            };

            {
              _frame.debugElementStack = [];
            }

            this.stack.push(_frame);
            return '';
          }

        case REACT_SUSPENSE_TYPE:
          {
            if (enableSuspenseServerRenderer) {
              var fallback = nextChild.props.fallback;

              if (fallback === undefined) {
                // If there is no fallback, then this just behaves as a fragment.
                var _nextChildren3 = toArray(nextChild.props.children);

                var _frame3 = {
                  type: null,
                  domNamespace: parentNamespace,
                  children: _nextChildren3,
                  childIndex: 0,
                  context: context,
                  footer: ''
                };

                {
                  _frame3.debugElementStack = [];
                }

                this.stack.push(_frame3);
                return '';
              }

              var fallbackChildren = toArray(fallback);

              var _nextChildren2 = toArray(nextChild.props.children);

              var fallbackFrame = {
                type: null,
                domNamespace: parentNamespace,
                children: fallbackChildren,
                childIndex: 0,
                context: context,
                footer: '<!--/$-->'
              };
              var _frame2 = {
                fallbackFrame: fallbackFrame,
                type: REACT_SUSPENSE_TYPE,
                domNamespace: parentNamespace,
                children: _nextChildren2,
                childIndex: 0,
                context: context,
                footer: '<!--/$-->'
              };

              {
                _frame2.debugElementStack = [];
                fallbackFrame.debugElementStack = [];
              }

              this.stack.push(_frame2);
              this.suspenseDepth++;
              return '<!--$-->';
            } else {
              {
                {
                  throw Error("ReactDOMServer does not yet support Suspense.");
                }
              }
            }
          }
        // eslint-disable-next-line-no-fallthrough

        default:
          break;
      }

      if (typeof elementType === 'object' && elementType !== null) {
        switch (elementType.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            {
              var element = nextChild;

              var _nextChildren4;

              var componentIdentity = {};
              prepareToUseHooks(componentIdentity);
              _nextChildren4 = elementType.render(element.props, element.ref);
              _nextChildren4 = finishHooks(elementType.render, element.props, _nextChildren4, element.ref);
              _nextChildren4 = toArray(_nextChildren4);
              var _frame4 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren4,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame4.debugElementStack = [];
              }

              this.stack.push(_frame4);
              return '';
            }

          case REACT_MEMO_TYPE:
            {
              var _element = nextChild;
              var _nextChildren5 = [React.createElement(elementType.type, _assign({
                ref: _element.ref
              }, _element.props))];
              var _frame5 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren5,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame5.debugElementStack = [];
              }

              this.stack.push(_frame5);
              return '';
            }

          case REACT_PROVIDER_TYPE:
            {
              var provider = nextChild;
              var nextProps = provider.props;

              var _nextChildren6 = toArray(nextProps.children);

              var _frame6 = {
                type: provider,
                domNamespace: parentNamespace,
                children: _nextChildren6,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame6.debugElementStack = [];
              }

              this.pushProvider(provider);
              this.stack.push(_frame6);
              return '';
            }

          case REACT_CONTEXT_TYPE:
            {
              var reactContext = nextChild.type; // The logic below for Context differs depending on PROD or DEV mode. In
              // DEV mode, we create a separate object for Context.Consumer that acts
              // like a proxy to Context. This proxy object adds unnecessary code in PROD
              // so we use the old behaviour (Context.Consumer references Context) to
              // reduce size and overhead. The separate object references context via
              // a property called "_context", which also gives us the ability to check
              // in DEV mode if this property exists or not and warn if it does not.

              {
                if (reactContext._context === undefined) {
                  // This may be because it's a Context (rather than a Consumer).
                  // Or it may be because it's older React where they're the same thing.
                  // We only want to warn if we're sure it's a new React.
                  if (reactContext !== reactContext.Consumer) {
                    if (!hasWarnedAboutUsingContextAsConsumer) {
                      hasWarnedAboutUsingContextAsConsumer = true;
                      warning$1(false, 'Rendering <Context> directly is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
                    }
                  }
                } else {
                  reactContext = reactContext._context;
                }
              }

              var _nextProps = nextChild.props;
              var threadID = this.threadID;
              validateContextBounds(reactContext, threadID);
              var nextValue = reactContext[threadID];

              var _nextChildren7 = toArray(_nextProps.children(nextValue));

              var _frame7 = {
                type: nextChild,
                domNamespace: parentNamespace,
                children: _nextChildren7,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame7.debugElementStack = [];
              }

              this.stack.push(_frame7);
              return '';
            }
          // eslint-disable-next-line-no-fallthrough

          case REACT_FUNDAMENTAL_TYPE:
            {
              if (enableFundamentalAPI) {
                var fundamentalImpl = elementType.impl;
                var open = fundamentalImpl.getServerSideString(null, nextElement.props);
                var getServerSideStringClose = fundamentalImpl.getServerSideStringClose;
                var close = getServerSideStringClose !== undefined ? getServerSideStringClose(null, nextElement.props) : '';

                var _nextChildren8 = fundamentalImpl.reconcileChildren !== false ? toArray(nextChild.props.children) : [];

                var _frame8 = {
                  type: null,
                  domNamespace: parentNamespace,
                  children: _nextChildren8,
                  childIndex: 0,
                  context: context,
                  footer: close
                };

                {
                  _frame8.debugElementStack = [];
                }

                this.stack.push(_frame8);
                return open;
              }

              {
                {
                  throw Error("ReactDOMServer does not yet support the fundamental API.");
                }
              }
            }
          // eslint-disable-next-line-no-fallthrough

          case REACT_LAZY_TYPE:
            {
              var _element2 = nextChild;
              var lazyComponent = nextChild.type; // Attempt to initialize lazy component regardless of whether the
              // suspense server-side renderer is enabled so synchronously
              // resolved constructors are supported.

              initializeLazyComponentType(lazyComponent);

              switch (lazyComponent._status) {
                case Resolved:
                  {
                    var _nextChildren9 = [React.createElement(lazyComponent._result, _assign({
                      ref: _element2.ref
                    }, _element2.props))];
                    var _frame9 = {
                      type: null,
                      domNamespace: parentNamespace,
                      children: _nextChildren9,
                      childIndex: 0,
                      context: context,
                      footer: ''
                    };

                    {
                      _frame9.debugElementStack = [];
                    }

                    this.stack.push(_frame9);
                    return '';
                  }

                case Rejected:
                  throw lazyComponent._result;

                case Pending:
                default:
                  {
                    {
                      throw Error("ReactDOMServer does not yet support lazy-loaded components.");
                    }
                  }

              }
            }
          // eslint-disable-next-line-no-fallthrough

          case REACT_SCOPE_TYPE:
            {
              if (enableScopeAPI) {
                var _nextChildren10 = toArray(nextChild.props.children);

                var _frame10 = {
                  type: null,
                  domNamespace: parentNamespace,
                  children: _nextChildren10,
                  childIndex: 0,
                  context: context,
                  footer: ''
                };

                {
                  _frame10.debugElementStack = [];
                }

                this.stack.push(_frame10);
                return '';
              }

              {
                {
                  throw Error("ReactDOMServer does not yet support scope components.");
                }
              }
            }
        }
      }

      var info = '';

      {
        var owner = nextElement._owner;

        if (elementType === undefined || typeof elementType === 'object' && elementType !== null && Object.keys(elementType).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
        }

        var ownerName = owner ? getComponentName(owner) : null;

        if (ownerName) {
          info += '\n\nCheck the render method of `' + ownerName + '`.';
        }
      }

      {
        {
          throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (elementType == null ? elementType : typeof elementType) + "." + info);
        }
      }
    }
  };

  _proto.renderDOM = function renderDOM(element, context, parentNamespace) {
    var tag = element.type.toLowerCase();
    var namespace = parentNamespace;

    if (parentNamespace === Namespaces.html) {
      namespace = getIntrinsicNamespace(tag);
    }

    {
      if (namespace === Namespaces.html) {
        // Should this check be gated by parent namespace? Not sure we want to
        // allow <SVG> or <mATH>.
        !(tag === element.type) ? warning$1(false, '<%s /> is using incorrect casing. ' + 'Use PascalCase for React components, ' + 'or lowercase for HTML elements.', element.type) : void 0;
      }
    }

    validateDangerousTag(tag);
    var props = element.props;

    if (tag === 'input') {
      {
        ReactControlledValuePropTypes.checkPropTypes('input', props);

        if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnDefaultChecked) {
          warning$1(false, '%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);
          didWarnDefaultChecked = true;
        }

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultInputValue) {
          warning$1(false, '%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);
          didWarnDefaultInputValue = true;
        }
      }

      props = _assign({
        type: undefined
      }, props, {
        defaultChecked: undefined,
        defaultValue: undefined,
        value: props.value != null ? props.value : props.defaultValue,
        checked: props.checked != null ? props.checked : props.defaultChecked
      });
    } else if (tag === 'textarea') {
      {
        ReactControlledValuePropTypes.checkPropTypes('textarea', props);

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultTextareaValue) {
          warning$1(false, 'Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
          didWarnDefaultTextareaValue = true;
        }
      }

      var initialValue = props.value;

      if (initialValue == null) {
        var defaultValue = props.defaultValue; // TODO (yungsters): Remove support for children content in <textarea>.

        var textareaChildren = props.children;

        if (textareaChildren != null) {
          {
            warning$1(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
          }

          if (!(defaultValue == null)) {
            {
              throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            }
          }

          if (Array.isArray(textareaChildren)) {
            if (!(textareaChildren.length <= 1)) {
              {
                throw Error("<textarea> can only have at most one child.");
              }
            }

            textareaChildren = textareaChildren[0];
          }

          defaultValue = '' + textareaChildren;
        }

        if (defaultValue == null) {
          defaultValue = '';
        }

        initialValue = defaultValue;
      }

      props = _assign({}, props, {
        value: undefined,
        children: '' + initialValue
      });
    } else if (tag === 'select') {
      {
        ReactControlledValuePropTypes.checkPropTypes('select', props);

        for (var i = 0; i < valuePropNames.length; i++) {
          var propName = valuePropNames[i];

          if (props[propName] == null) {
            continue;
          }

          var isArray = Array.isArray(props[propName]);

          if (props.multiple && !isArray) {
            warning$1(false, 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.', propName);
          } else if (!props.multiple && isArray) {
            warning$1(false, 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.', propName);
          }
        }

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultSelectValue) {
          warning$1(false, 'Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
          didWarnDefaultSelectValue = true;
        }
      }

      this.currentSelectValue = props.value != null ? props.value : props.defaultValue;
      props = _assign({}, props, {
        value: undefined
      });
    } else if (tag === 'option') {
      var selected = null;
      var selectValue = this.currentSelectValue;
      var optionChildren = flattenOptionChildren(props.children);

      if (selectValue != null) {
        var value;

        if (props.value != null) {
          value = props.value + '';
        } else {
          value = optionChildren;
        }

        selected = false;

        if (Array.isArray(selectValue)) {
          // multiple
          for (var j = 0; j < selectValue.length; j++) {
            if ('' + selectValue[j] === value) {
              selected = true;
              break;
            }
          }
        } else {
          selected = '' + selectValue === value;
        }

        props = _assign({
          selected: undefined,
          children: undefined
        }, props, {
          selected: selected,
          children: optionChildren
        });
      }
    }

    {
      validatePropertiesInDevelopment(tag, props);
    }

    assertValidProps(tag, props);
    var out = createOpenTagMarkup(element.type, tag, props, namespace, this.makeStaticMarkup, this.stack.length === 1);
    var footer = '';

    if (omittedCloseTags.hasOwnProperty(tag)) {
      out += '/>';
    } else {
      out += '>';
      footer = '</' + element.type + '>';
    }

    var children;
    var innerMarkup = getNonChildrenInnerMarkup(props);

    if (innerMarkup != null) {
      children = [];

      if (newlineEatingTags[tag] && innerMarkup.charAt(0) === '\n') {
        // text/html ignores the first character in these tags if it's a newline
        // Prefer to break application/xml over text/html (for now) by adding
        // a newline specifically to get eaten by the parser. (Alternately for
        // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
        // \r is normalized out by HTMLTextAreaElement#value.)
        // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
        // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
        // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
        // See: Parsing of "textarea" "listing" and "pre" elements
        //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
        out += '\n';
      }

      out += innerMarkup;
    } else {
      children = toArray(props.children);
    }

    var frame = {
      domNamespace: getChildNamespace(parentNamespace, element.type),
      type: tag,
      children: children,
      childIndex: 0,
      context: context,
      footer: footer
    };

    {
      frame.debugElementStack = [];
    }

    this.stack.push(frame);
    this.previousWasTextNode = false;
    return out;
  };

  return ReactDOMServerRenderer;
}();

/**
 * Render a ReactElement to its initial HTML. This should only be used on the
 * server.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostring
 */

function renderToString(element) {
  var renderer = new ReactDOMServerRenderer(element, false);

  try {
    var markup = renderer.read(Infinity);
    return markup;
  } finally {
    renderer.destroy();
  }
}
/**
 * Similar to renderToString, except this doesn't create extra DOM attributes
 * such as data-react-id that React uses internally.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup
 */

function renderToStaticMarkup(element) {
  var renderer = new ReactDOMServerRenderer(element, true);

  try {
    var markup = renderer.read(Infinity);
    return markup;
  } finally {
    renderer.destroy();
  }
}

function renderToNodeStream() {
  {
    {
      throw Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
  }
}

function renderToStaticNodeStream() {
  {
    {
      throw Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
  }
} // Note: when changing this, also consider https://github.com/facebook/react/issues/11526


var ReactDOMServerBrowser = {
  renderToString: renderToString,
  renderToStaticMarkup: renderToStaticMarkup,
  renderToNodeStream: renderToNodeStream,
  renderToStaticNodeStream: renderToStaticNodeStream,
  version: ReactVersion
};

var ReactDOMServerBrowser$1 = Object.freeze({
	default: ReactDOMServerBrowser
});

var ReactDOMServer = ( ReactDOMServerBrowser$1 && ReactDOMServerBrowser ) || ReactDOMServerBrowser$1;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest


var server_browser = ReactDOMServer.default || ReactDOMServer;

module.exports = server_browser;
  })();
}


/***/ }),

/***/ "./node_modules/react-dom/server.browser.js":
/*!**************************************************!*\
  !*** ./node_modules/react-dom/server.browser.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-dom-server.browser.development.js */ "./node_modules/react-dom/cjs/react-dom-server.browser.development.js");
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2Nqcy9yZWFjdC1kb20tc2VydmVyLmJyb3dzZXIuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9zZXJ2ZXIuYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOzs7O0FBSWIsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyw0REFBZTtBQUNyQyxZQUFZLG1CQUFPLENBQUMsNENBQU87QUFDM0IscUJBQXFCLG1CQUFPLENBQUMsOEVBQTJCOztBQUV4RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBGQUEwRixhQUFhO0FBQ3ZHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsbURBQW1EO0FBQ25EOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRTtBQUMxRTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0ZBQW9GO0FBQ3BGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMERBQTBEOztBQUUxRCwwRkFBMEYsYUFBYTtBQUN2RztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwRkFBMEYsYUFBYTtBQUN2RztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnR0FBZ0csZUFBZTtBQUMvRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbURBQW1EOztBQUVuRCx5Q0FBeUM7O0FBRXpDOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBLDJCQUEyQjs7QUFFM0IsaUNBQWlDOztBQUVqQywyQkFBMkI7O0FBRTNCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxlQUFlO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtJQUErSTs7QUFFL0k7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWCxvRUFBb0UsNENBQTRDO0FBQ2hIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjs7QUFFQSxnQkFBZ0I7QUFDaEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7O0FBR0Esb0JBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsVUFBVSxLQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsb0JBQW9CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsRUFBRSw4QkFBOEI7O0FBRXhEOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsWUFBWSxPQUFPO0FBQ25COzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFlBQVksT0FBTztBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE9BQU87QUFDbkI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixZQUFZLFFBQVE7QUFDcEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLFlBQVksT0FBTztBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDhCQUE4Qjs7QUFFOUIsdUJBQXVCOztBQUV2Qix5Q0FBeUM7O0FBRXpDLDhCQUE4Qjs7QUFFOUI7QUFDQTtBQUNBLGtDQUFrQzs7QUFFbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsNENBQTRDO0FBQzdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLE9BQU87QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJFQUEyRSxZQUFZO0FBQ3ZGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBIQUEwSCw2QkFBNkI7QUFDdko7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixZQUFZLE9BQU87QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsNENBQTRDO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2IsWUFBWSxPQUFPO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCOztBQUU5Qiw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdGQUFnRjtBQUNoRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssMENBQTBDOzs7QUFHL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2RkFBNkY7QUFDN0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSywwQ0FBMEM7OztBQUcvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBLG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZFQUE2RTs7QUFFN0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUtBQWlLLGlCQUFpQjtBQUNsTCxPQUFPO0FBQ1AsaUtBQWlLLGlCQUFpQix3REFBd0QsbUJBQW1CLGdCQUFnQiw4QkFBOEI7QUFDM1M7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0EsK0dBQStHLEdBQUc7QUFDbEg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrRUFBa0U7O0FBRWxFLHdDQUF3Qzs7QUFFeEMsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBLG1CQUFtQjs7QUFFbkIsbUNBQW1DLFFBQVE7QUFDM0MsNEJBQTRCO0FBQzVCO0FBQ0E7O0FBRUE7O0FBRUEsaURBQWlELFNBQVM7QUFDMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBLDBDQUEwQyxxQkFBcUI7QUFDL0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDLFlBQVk7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQzs7QUFFaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDs7QUFFckQ7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFdBQVc7OztBQUdYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDOztBQUU1QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7OztBQUdYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDhDQUE4Qzs7QUFFOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBLHVCQUF1QiwyQkFBMkI7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLHdCQUF3QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDanRJYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxtQkFBbUIsbUJBQU8sQ0FBQywySEFBK0M7QUFDMUUiLCJmaWxlIjoianMvMC5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTIuMFxuICogcmVhY3QtZG9tLXNlcnZlci5icm93c2VyLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMnKTtcblxuLy8gRG8gbm90IHJlcXVpcmUgdGhpcyBtb2R1bGUgZGlyZWN0bHkhIFVzZSBub3JtYWwgYGludmFyaWFudGAgY2FsbHMgd2l0aFxuLy8gdGVtcGxhdGUgbGl0ZXJhbCBzdHJpbmdzLiBUaGUgbWVzc2FnZXMgd2lsbCBiZSByZXBsYWNlZCB3aXRoIGVycm9yIGNvZGVzXG4vLyBkdXJpbmcgYnVpbGQuXG5cbi8vIFRPRE86IHRoaXMgaXMgc3BlY2lhbCBiZWNhdXNlIGl0IGdldHMgaW1wb3J0ZWQgZHVyaW5nIGJ1aWxkLlxuXG52YXIgUmVhY3RWZXJzaW9uID0gJzE2LjEyLjAnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xudmFyIHdhcm5pbmdXaXRob3V0U3RhY2sgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICB3YXJuaW5nV2l0aG91dFN0YWNrID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2B3YXJuaW5nV2l0aG91dFN0YWNrKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cblxuICAgIGlmIChhcmdzLmxlbmd0aCA+IDgpIHtcbiAgICAgIC8vIENoZWNrIGJlZm9yZSB0aGUgY29uZGl0aW9uIHRvIGNhdGNoIHZpb2xhdGlvbnMgZWFybHkuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3dhcm5pbmdXaXRob3V0U3RhY2soKSBjdXJyZW50bHkgc3VwcG9ydHMgYXQgbW9zdCA4IGFyZ3VtZW50cy4nKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICAgIH0pO1xuICAgICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG5cbiAgICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGUuZXJyb3IsIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG52YXIgd2FybmluZ1dpdGhvdXRTdGFjayQxID0gd2FybmluZ1dpdGhvdXRTdGFjaztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG5cbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxuXG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcblxudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDsgLy8gUHJldmVudCBuZXdlciByZW5kZXJlcnMgZnJvbSBSVEUgd2hlbiB1c2VkIHdpdGggb2xkZXIgcmVhY3QgcGFja2FnZSB2ZXJzaW9ucy5cbi8vIEN1cnJlbnQgb3duZXIgYW5kIGRpc3BhdGNoZXIgdXNlZCB0byBzaGFyZSB0aGUgc2FtZSByZWYsXG4vLyBidXQgUFIgIzE0NTQ4IHNwbGl0IHRoZW0gb3V0IHRvIGJldHRlciBzdXBwb3J0IHRoZSByZWFjdC1kZWJ1Zy10b29scyBwYWNrYWdlLlxuXG5pZiAoIVJlYWN0U2hhcmVkSW50ZXJuYWxzLmhhc093blByb3BlcnR5KCdSZWFjdEN1cnJlbnREaXNwYXRjaGVyJykpIHtcbiAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG59XG5cbmlmICghUmVhY3RTaGFyZWRJbnRlcm5hbHMuaGFzT3duUHJvcGVydHkoJ1JlYWN0Q3VycmVudEJhdGNoQ29uZmlnJykpIHtcbiAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50QmF0Y2hDb25maWcgPSB7XG4gICAgc3VzcGVuc2U6IG51bGxcbiAgfTtcbn1cblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSB3YXJuaW5nV2l0aG91dFN0YWNrJDE7XG5cbntcbiAgd2FybmluZyA9IGZ1bmN0aW9uIChjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC93YXJuaW5nLWFuZC1pbnZhcmlhbnQtYXJnc1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgd2FybmluZ1dpdGhvdXRTdGFjayQxLmFwcGx5KHZvaWQgMCwgW2ZhbHNlLCBmb3JtYXQgKyAnJXMnXS5jb25jYXQoYXJncywgW3N0YWNrXSkpO1xuICB9O1xufVxuXG52YXIgd2FybmluZyQxID0gd2FybmluZztcblxudmFyIFVuaW5pdGlhbGl6ZWQgPSAtMTtcbnZhciBQZW5kaW5nID0gMDtcbnZhciBSZXNvbHZlZCA9IDE7XG52YXIgUmVqZWN0ZWQgPSAyO1xuZnVuY3Rpb24gcmVmaW5lUmVzb2x2ZWRMYXp5Q29tcG9uZW50KGxhenlDb21wb25lbnQpIHtcbiAgcmV0dXJuIGxhenlDb21wb25lbnQuX3N0YXR1cyA9PT0gUmVzb2x2ZWQgPyBsYXp5Q29tcG9uZW50Ll9yZXN1bHQgOiBudWxsO1xufVxuZnVuY3Rpb24gaW5pdGlhbGl6ZUxhenlDb21wb25lbnRUeXBlKGxhenlDb21wb25lbnQpIHtcbiAgaWYgKGxhenlDb21wb25lbnQuX3N0YXR1cyA9PT0gVW5pbml0aWFsaXplZCkge1xuICAgIGxhenlDb21wb25lbnQuX3N0YXR1cyA9IFBlbmRpbmc7XG4gICAgdmFyIGN0b3IgPSBsYXp5Q29tcG9uZW50Ll9jdG9yO1xuICAgIHZhciB0aGVuYWJsZSA9IGN0b3IoKTtcbiAgICBsYXp5Q29tcG9uZW50Ll9yZXN1bHQgPSB0aGVuYWJsZTtcbiAgICB0aGVuYWJsZS50aGVuKGZ1bmN0aW9uIChtb2R1bGVPYmplY3QpIHtcbiAgICAgIGlmIChsYXp5Q29tcG9uZW50Ll9zdGF0dXMgPT09IFBlbmRpbmcpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRFeHBvcnQgPSBtb2R1bGVPYmplY3QuZGVmYXVsdDtcblxuICAgICAgICB7XG4gICAgICAgICAgaWYgKGRlZmF1bHRFeHBvcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnbGF6eTogRXhwZWN0ZWQgdGhlIHJlc3VsdCBvZiBhIGR5bmFtaWMgaW1wb3J0KCkgY2FsbC4gJyArICdJbnN0ZWFkIHJlY2VpdmVkOiAlc1xcblxcbllvdXIgY29kZSBzaG91bGQgbG9vayBsaWtlOiBcXG4gICcgKyBcImNvbnN0IE15Q29tcG9uZW50ID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vTXlDb21wb25lbnQnKSlcIiwgbW9kdWxlT2JqZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsYXp5Q29tcG9uZW50Ll9zdGF0dXMgPSBSZXNvbHZlZDtcbiAgICAgICAgbGF6eUNvbXBvbmVudC5fcmVzdWx0ID0gZGVmYXVsdEV4cG9ydDtcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmIChsYXp5Q29tcG9uZW50Ll9zdGF0dXMgPT09IFBlbmRpbmcpIHtcbiAgICAgICAgbGF6eUNvbXBvbmVudC5fc3RhdHVzID0gUmVqZWN0ZWQ7XG4gICAgICAgIGxhenlDb21wb25lbnQuX3Jlc3VsdCA9IGVycm9yO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuIFwiUHJvZmlsZXJcIjtcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHJldHVybiAnQ29udGV4dC5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgcmV0dXJuICdDb250ZXh0LlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciB0aGVuYWJsZSA9IHR5cGU7XG4gICAgICAgICAgdmFyIHJlc29sdmVkVGhlbmFibGUgPSByZWZpbmVSZXNvbHZlZExhenlDb21wb25lbnQodGhlbmFibGUpO1xuXG4gICAgICAgICAgaWYgKHJlc29sdmVkVGhlbmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHJlc29sdmVkVGhlbmFibGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogRm9ya2VkIGZyb20gZmJqcy93YXJuaW5nOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2ZianMvYmxvYi9lNjZiYTIwYWQ1YmU0MzNlYjU0NDIzZjJiMDk3ZDgyOTMyNGQ5ZGU2L3BhY2thZ2VzL2ZianMvc3JjL19fZm9ya3NfXy93YXJuaW5nLmpzXG4gKlxuICogT25seSBjaGFuZ2UgaXMgd2UgdXNlIGNvbnNvbGUud2FybiBpbnN0ZWFkIG9mIGNvbnNvbGUuZXJyb3IsXG4gKiBhbmQgZG8gbm90aGluZyB3aGVuICdjb25zb2xlJyBpcyBub3Qgc3VwcG9ydGVkLlxuICogVGhpcyByZWFsbHkgc2ltcGxpZmllcyB0aGUgY29kZS5cbiAqIC0tLVxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG52YXIgbG93UHJpb3JpdHlXYXJuaW5nV2l0aG91dFN0YWNrID0gZnVuY3Rpb24gKCkge307XG5cbntcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG5cbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcblxuICBsb3dQcmlvcml0eVdhcm5pbmdXaXRob3V0U3RhY2sgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYGxvd1ByaW9yaXR5V2FybmluZ1dpdGhvdXRTdGFjayhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHZvaWQgMCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmdXaXRob3V0U3RhY2skMSA9IGxvd1ByaW9yaXR5V2FybmluZ1dpdGhvdXRTdGFjaztcblxudmFyIEJFRk9SRV9TTEFTSF9SRSA9IC9eKC4qKVtcXFxcXFwvXS87XG52YXIgZGVzY3JpYmVDb21wb25lbnRGcmFtZSA9IGZ1bmN0aW9uIChuYW1lLCBzb3VyY2UsIG93bmVyTmFtZSkge1xuICB2YXIgc291cmNlSW5mbyA9ICcnO1xuXG4gIGlmIChzb3VyY2UpIHtcbiAgICB2YXIgcGF0aCA9IHNvdXJjZS5maWxlTmFtZTtcbiAgICB2YXIgZmlsZU5hbWUgPSBwYXRoLnJlcGxhY2UoQkVGT1JFX1NMQVNIX1JFLCAnJyk7XG5cbiAgICB7XG4gICAgICAvLyBJbiBERVYsIGluY2x1ZGUgY29kZSBmb3IgYSBjb21tb24gc3BlY2lhbCBjYXNlOlxuICAgICAgLy8gcHJlZmVyIFwiZm9sZGVyL2luZGV4LmpzXCIgaW5zdGVhZCBvZiBqdXN0IFwiaW5kZXguanNcIi5cbiAgICAgIGlmICgvXmluZGV4XFwuLy50ZXN0KGZpbGVOYW1lKSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBwYXRoLm1hdGNoKEJFRk9SRV9TTEFTSF9SRSk7XG5cbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdmFyIHBhdGhCZWZvcmVTbGFzaCA9IG1hdGNoWzFdO1xuXG4gICAgICAgICAgaWYgKHBhdGhCZWZvcmVTbGFzaCkge1xuICAgICAgICAgICAgdmFyIGZvbGRlck5hbWUgPSBwYXRoQmVmb3JlU2xhc2gucmVwbGFjZShCRUZPUkVfU0xBU0hfUkUsICcnKTtcbiAgICAgICAgICAgIGZpbGVOYW1lID0gZm9sZGVyTmFtZSArICcvJyArIGZpbGVOYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNvdXJjZUluZm8gPSAnIChhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBzb3VyY2UubGluZU51bWJlciArICcpJztcbiAgfSBlbHNlIGlmIChvd25lck5hbWUpIHtcbiAgICBzb3VyY2VJbmZvID0gJyAoY3JlYXRlZCBieSAnICsgb3duZXJOYW1lICsgJyknO1xuICB9XG5cbiAgcmV0dXJuICdcXG4gICAgaW4gJyArIChuYW1lIHx8ICdVbmtub3duJykgKyBzb3VyY2VJbmZvO1xufTtcblxuLy8gSGVscHMgaWRlbnRpZnkgc2lkZSBlZmZlY3RzIGluIHJlbmRlci1waGFzZSBsaWZlY3ljbGUgaG9va3MgYW5kIHNldFN0YXRlXG4vLyByZWR1Y2VycyBieSBkb3VibGUgaW52b2tpbmcgdGhlbSBpbiBTdHJpY3QgTW9kZS5cblxuIC8vIFRvIHByZXNlcnZlIHRoZSBcIlBhdXNlIG9uIGNhdWdodCBleGNlcHRpb25zXCIgYmVoYXZpb3Igb2YgdGhlIGRlYnVnZ2VyLCB3ZVxuLy8gcmVwbGF5IHRoZSBiZWdpbiBwaGFzZSBvZiBhIGZhaWxlZCBjb21wb25lbnQgaW5zaWRlIGludm9rZUd1YXJkZWRDYWxsYmFjay5cblxuIC8vIFdhcm4gYWJvdXQgZGVwcmVjYXRlZCwgYXN5bmMtdW5zYWZlIGxpZmVjeWNsZXM7IHJlbGF0ZXMgdG8gUkZDICM2OlxuXG52YXIgd2FybkFib3V0RGVwcmVjYXRlZExpZmVjeWNsZXMgPSB0cnVlOyAvLyBHYXRoZXIgYWR2YW5jZWQgdGltaW5nIG1ldHJpY3MgZm9yIFByb2ZpbGVyIHN1YnRyZWVzLlxuXG4gLy8gVHJhY2Ugd2hpY2ggaW50ZXJhY3Rpb25zIHRyaWdnZXIgZWFjaCBjb21taXQuXG5cbiAvLyBTU1IgZXhwZXJpbWVudHNcblxudmFyIGVuYWJsZVN1c3BlbnNlU2VydmVyUmVuZGVyZXIgPSBmYWxzZTtcbiAvLyBPbmx5IHVzZWQgaW4gd3d3IGJ1aWxkcy5cblxuIC8vIE9ubHkgdXNlZCBpbiB3d3cgYnVpbGRzLlxuXG4gLy8gRGlzYWJsZSBqYXZhc2NyaXB0OiBVUkwgc3RyaW5ncyBpbiBocmVmIGZvciBYU1MgcHJvdGVjdGlvbi5cblxudmFyIGRpc2FibGVKYXZhU2NyaXB0VVJMcyA9IGZhbHNlOyAvLyBSZWFjdCBGaXJlOiBwcmV2ZW50IHRoZSB2YWx1ZSBhbmQgY2hlY2tlZCBhdHRyaWJ1dGVzIGZyb20gc3luY2luZ1xuLy8gd2l0aCB0aGVpciByZWxhdGVkIERPTSBwcm9wZXJ0aWVzXG5cbiAvLyBUaGVzZSBBUElzIHdpbGwgbm8gbG9uZ2VyIGJlIFwidW5zdGFibGVcIiBpbiB0aGUgdXBjb21pbmcgMTYuNyByZWxlYXNlLFxuLy8gQ29udHJvbCB0aGlzIGJlaGF2aW9yIHdpdGggYSBmbGFnIHRvIHN1cHBvcnQgMTYuNiBtaW5vciByZWxlYXNlcyBpbiB0aGUgbWVhbndoaWxlLlxuXG5cbiAvLyBFeHBlcmltZW50YWwgUmVhY3QgRmxhcmUgZXZlbnQgc3lzdGVtIGFuZCBldmVudCBjb21wb25lbnRzIHN1cHBvcnQuXG5cbnZhciBlbmFibGVGbGFyZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgSG9zdCBDb21wb25lbnQgc3VwcG9ydC5cblxudmFyIGVuYWJsZUZ1bmRhbWVudGFsQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBTY29wZSBzdXBwb3J0LlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gTmV3IEFQSSBmb3IgSlNYIHRyYW5zZm9ybXMgdG8gdGFyZ2V0IC0gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmZjcy9wdWxsLzEwN1xuXG4gLy8gV2Ugd2lsbCBlbmZvcmNlIG1vY2tpbmcgc2NoZWR1bGVyIHdpdGggc2NoZWR1bGVyL3Vuc3RhYmxlX21vY2sgYXQgc29tZSBwb2ludC4gKHYxNz8pXG4vLyBUaWxsIHRoZW4sIHdlIHdhcm4gYWJvdXQgdGhlIG1pc3NpbmcgbW9jaywgYnV0IHN0aWxsIGZhbGxiYWNrIHRvIGEgbGVnYWN5IG1vZGUgY29tcGF0aWJsZSB2ZXJzaW9uXG5cbiAvLyBGb3IgdGVzdHMsIHdlIGZsdXNoIHN1c3BlbnNlIGZhbGxiYWNrcyBpbiBhbiBhY3Qgc2NvcGU7XG4vLyAqZXhjZXB0KiBpbiBzb21lIG9mIG91ciBvd24gdGVzdHMsIHdoZXJlIHdlIHRlc3QgaW5jcmVtZW50YWwgbG9hZGluZyBzdGF0ZXMuXG5cbiAvLyBBZGQgYSBjYWxsYmFjayBwcm9wZXJ0eSB0byBzdXNwZW5zZSB0byBub3RpZnkgd2hpY2ggcHJvbWlzZXMgYXJlIGN1cnJlbnRseVxuLy8gaW4gdGhlIHVwZGF0ZSBxdWV1ZS4gVGhpcyBhbGxvd3MgcmVwb3J0aW5nIGFuZCB0cmFjaW5nIG9mIHdoYXQgaXMgY2F1c2luZ1xuLy8gdGhlIHVzZXIgdG8gc2VlIGEgbG9hZGluZyBzdGF0ZS5cbi8vIEFsc28gYWxsb3dzIGh5ZHJhdGlvbiBjYWxsYmFja3MgdG8gZmlyZSB3aGVuIGEgZGVoeWRyYXRlZCBib3VuZGFyeSBnZXRzXG4vLyBoeWRyYXRlZCBvciBkZWxldGVkLlxuXG4gLy8gUGFydCBvZiB0aGUgc2ltcGxpZmljYXRpb24gb2YgUmVhY3QuY3JlYXRlRWxlbWVudCBzbyB3ZSBjYW4gZXZlbnR1YWxseSBtb3ZlXG4vLyBmcm9tIFJlYWN0LmNyZWF0ZUVsZW1lbnQgdG8gUmVhY3QuanN4XG4vLyBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL2Jsb2IvY3JlYXRlbGVtZW50LXJmYy90ZXh0LzAwMDAtY3JlYXRlLWVsZW1lbnQtY2hhbmdlcy5tZFxuXG5cblxudmFyIGRpc2FibGVMZWdhY3lDb250ZXh0ID0gZmFsc2U7XG5cbiAvLyBGbGFnIHRvIHR1cm4gZXZlbnQudGFyZ2V0IGFuZCBldmVudC5jdXJyZW50VGFyZ2V0IGluIFJlYWN0TmF0aXZlIGZyb20gYSByZWFjdFRhZyB0byBhIGNvbXBvbmVudCBpbnN0YW5jZVxuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxO1xudmFyIGRpZFdhcm5BYm91dEludmFsaWRhdGVDb250ZXh0VHlwZTtcblxue1xuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICBkaWRXYXJuQWJvdXRJbnZhbGlkYXRlQ29udGV4dFR5cGUgPSBuZXcgU2V0KCk7XG59XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xuXG57XG4gIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xufVxuXG5mdW5jdGlvbiBtYXNrQ29udGV4dCh0eXBlLCBjb250ZXh0KSB7XG4gIHZhciBjb250ZXh0VHlwZXMgPSB0eXBlLmNvbnRleHRUeXBlcztcblxuICBpZiAoIWNvbnRleHRUeXBlcykge1xuICAgIHJldHVybiBlbXB0eU9iamVjdDtcbiAgfVxuXG4gIHZhciBtYXNrZWRDb250ZXh0ID0ge307XG5cbiAgZm9yICh2YXIgY29udGV4dE5hbWUgaW4gY29udGV4dFR5cGVzKSB7XG4gICAgbWFza2VkQ29udGV4dFtjb250ZXh0TmFtZV0gPSBjb250ZXh0W2NvbnRleHROYW1lXTtcbiAgfVxuXG4gIHJldHVybiBtYXNrZWRDb250ZXh0O1xufVxuXG5mdW5jdGlvbiBjaGVja0NvbnRleHRUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24pIHtcbiAge1xuICAgIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgJ0NvbXBvbmVudCcsIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5nZXRDdXJyZW50U3RhY2spO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ29udGV4dEJvdW5kcyhjb250ZXh0LCB0aHJlYWRJRCkge1xuICAvLyBJZiB3ZSBkb24ndCBoYXZlIGVub3VnaCBzbG90cyBpbiB0aGlzIGNvbnRleHQgdG8gc3RvcmUgdGhpcyB0aHJlYWRJRCxcbiAgLy8gZmlsbCBpdCBpbiB3aXRob3V0IGxlYXZpbmcgYW55IGhvbGVzIHRvIGVuc3VyZSB0aGF0IHRoZSBWTSBvcHRpbWl6ZXNcbiAgLy8gdGhpcyBhcyBub24taG9sZXkgaW5kZXggcHJvcGVydGllcy5cbiAgLy8gKE5vdGU6IElmIGByZWFjdGAgcGFja2FnZSBpcyA8IDE2LjYsIF90aHJlYWRDb3VudCBpcyB1bmRlZmluZWQuKVxuICBmb3IgKHZhciBpID0gY29udGV4dC5fdGhyZWFkQ291bnQgfCAwOyBpIDw9IHRocmVhZElEOyBpKyspIHtcbiAgICAvLyBXZSBhc3N1bWUgdGhhdCB0aGlzIGlzIHRoZSBzYW1lIGFzIHRoZSBkZWZhdWx0VmFsdWUgd2hpY2ggbWlnaHQgbm90IGJlXG4gICAgLy8gdHJ1ZSBpZiB3ZSdyZSByZW5kZXJpbmcgaW5zaWRlIGEgc2Vjb25kYXJ5IHJlbmRlcmVyIGJ1dCB0aGV5IGFyZVxuICAgIC8vIHNlY29uZGFyeSBiZWNhdXNlIHRoZXNlIHVzZSBjYXNlcyBhcmUgdmVyeSByYXJlLlxuICAgIGNvbnRleHRbaV0gPSBjb250ZXh0Ll9jdXJyZW50VmFsdWUyO1xuICAgIGNvbnRleHQuX3RocmVhZENvdW50ID0gaSArIDE7XG4gIH1cbn1cbmZ1bmN0aW9uIHByb2Nlc3NDb250ZXh0KHR5cGUsIGNvbnRleHQsIHRocmVhZElELCBpc0NsYXNzKSB7XG4gIGlmIChpc0NsYXNzKSB7XG4gICAgdmFyIGNvbnRleHRUeXBlID0gdHlwZS5jb250ZXh0VHlwZTtcblxuICAgIHtcbiAgICAgIGlmICgnY29udGV4dFR5cGUnIGluIHR5cGUpIHtcbiAgICAgICAgdmFyIGlzVmFsaWQgPSAvLyBBbGxvdyBudWxsIGZvciBjb25kaXRpb25hbCBkZWNsYXJhdGlvblxuICAgICAgICBjb250ZXh0VHlwZSA9PT0gbnVsbCB8fCBjb250ZXh0VHlwZSAhPT0gdW5kZWZpbmVkICYmIGNvbnRleHRUeXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgJiYgY29udGV4dFR5cGUuX2NvbnRleHQgPT09IHVuZGVmaW5lZDsgLy8gTm90IGEgPENvbnRleHQuQ29uc3VtZXI+XG5cbiAgICAgICAgaWYgKCFpc1ZhbGlkICYmICFkaWRXYXJuQWJvdXRJbnZhbGlkYXRlQ29udGV4dFR5cGUuaGFzKHR5cGUpKSB7XG4gICAgICAgICAgZGlkV2FybkFib3V0SW52YWxpZGF0ZUNvbnRleHRUeXBlLmFkZCh0eXBlKTtcbiAgICAgICAgICB2YXIgYWRkZW5kdW0gPSAnJztcblxuICAgICAgICAgIGlmIChjb250ZXh0VHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhZGRlbmR1bSA9ICcgSG93ZXZlciwgaXQgaXMgc2V0IHRvIHVuZGVmaW5lZC4gJyArICdUaGlzIGNhbiBiZSBjYXVzZWQgYnkgYSB0eXBvIG9yIGJ5IG1peGluZyB1cCBuYW1lZCBhbmQgZGVmYXVsdCBpbXBvcnRzLiAnICsgJ1RoaXMgY2FuIGFsc28gaGFwcGVuIGR1ZSB0byBhIGNpcmN1bGFyIGRlcGVuZGVuY3ksIHNvICcgKyAndHJ5IG1vdmluZyB0aGUgY3JlYXRlQ29udGV4dCgpIGNhbGwgdG8gYSBzZXBhcmF0ZSBmaWxlLic7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY29udGV4dFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBhZGRlbmR1bSA9ICcgSG93ZXZlciwgaXQgaXMgc2V0IHRvIGEgJyArIHR5cGVvZiBjb250ZXh0VHlwZSArICcuJztcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHRUeXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFKSB7XG4gICAgICAgICAgICBhZGRlbmR1bSA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyB0aGUgQ29udGV4dC5Qcm92aWRlciBpbnN0ZWFkPyc7XG4gICAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0VHlwZS5fY29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyA8Q29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgICAgIGFkZGVuZHVtID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBwYXNzIHRoZSBDb250ZXh0LkNvbnN1bWVyIGluc3RlYWQ/JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkZW5kdW0gPSAnIEhvd2V2ZXIsIGl0IGlzIHNldCB0byBhbiBvYmplY3Qgd2l0aCBrZXlzIHsnICsgT2JqZWN0LmtleXMoY29udGV4dFR5cGUpLmpvaW4oJywgJykgKyAnfS4nO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJyVzIGRlZmluZXMgYW4gaW52YWxpZCBjb250ZXh0VHlwZS4gJyArICdjb250ZXh0VHlwZSBzaG91bGQgcG9pbnQgdG8gdGhlIENvbnRleHQgb2JqZWN0IHJldHVybmVkIGJ5IFJlYWN0LmNyZWF0ZUNvbnRleHQoKS4lcycsIGdldENvbXBvbmVudE5hbWUodHlwZSkgfHwgJ0NvbXBvbmVudCcsIGFkZGVuZHVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29udGV4dFR5cGUgPT09ICdvYmplY3QnICYmIGNvbnRleHRUeXBlICE9PSBudWxsKSB7XG4gICAgICB2YWxpZGF0ZUNvbnRleHRCb3VuZHMoY29udGV4dFR5cGUsIHRocmVhZElEKTtcbiAgICAgIHJldHVybiBjb250ZXh0VHlwZVt0aHJlYWRJRF07XG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVMZWdhY3lDb250ZXh0KSB7XG4gICAgICB7XG4gICAgICAgIGlmICh0eXBlLmNvbnRleHRUeXBlcykge1xuICAgICAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJyVzIHVzZXMgdGhlIGxlZ2FjeSBjb250ZXh0VHlwZXMgQVBJIHdoaWNoIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQuICcgKyAnVXNlIFJlYWN0LmNyZWF0ZUNvbnRleHQoKSB3aXRoIHN0YXRpYyBjb250ZXh0VHlwZSBpbnN0ZWFkLicsIGdldENvbXBvbmVudE5hbWUodHlwZSkgfHwgJ1Vua25vd24nKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZW1wdHlPYmplY3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBtYXNrZWRDb250ZXh0ID0gbWFza0NvbnRleHQodHlwZSwgY29udGV4dCk7XG5cbiAgICAgIHtcbiAgICAgICAgaWYgKHR5cGUuY29udGV4dFR5cGVzKSB7XG4gICAgICAgICAgY2hlY2tDb250ZXh0VHlwZXModHlwZS5jb250ZXh0VHlwZXMsIG1hc2tlZENvbnRleHQsICdjb250ZXh0Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1hc2tlZENvbnRleHQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChkaXNhYmxlTGVnYWN5Q29udGV4dCkge1xuICAgICAge1xuICAgICAgICBpZiAodHlwZS5jb250ZXh0VHlwZXMpIHtcbiAgICAgICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICclcyB1c2VzIHRoZSBsZWdhY3kgY29udGV4dFR5cGVzIEFQSSB3aGljaCBpcyBubyBsb25nZXIgc3VwcG9ydGVkLiAnICsgJ1VzZSBSZWFjdC5jcmVhdGVDb250ZXh0KCkgd2l0aCBSZWFjdC51c2VDb250ZXh0KCkgaW5zdGVhZC4nLCBnZXRDb21wb25lbnROYW1lKHR5cGUpIHx8ICdVbmtub3duJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9tYXNrZWRDb250ZXh0ID0gbWFza0NvbnRleHQodHlwZSwgY29udGV4dCk7XG5cbiAgICAgIHtcbiAgICAgICAgaWYgKHR5cGUuY29udGV4dFR5cGVzKSB7XG4gICAgICAgICAgY2hlY2tDb250ZXh0VHlwZXModHlwZS5jb250ZXh0VHlwZXMsIF9tYXNrZWRDb250ZXh0LCAnY29udGV4dCcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfbWFza2VkQ29udGV4dDtcbiAgICB9XG4gIH1cbn1cblxuLy8gQWxsb2NhdGVzIGEgbmV3IGluZGV4IGZvciBlYWNoIHJlcXVlc3QuIFRyaWVzIHRvIHN0YXkgYXMgY29tcGFjdCBhcyBwb3NzaWJsZSBzbyB0aGF0IHRoZXNlXG4vLyBpbmRpY2VzIGNhbiBiZSB1c2VkIHRvIHJlZmVyZW5jZSBhIHRpZ2h0bHkgcGFja2VkIGFycmF5LiBBcyBvcHBvc2VkIHRvIGJlaW5nIHVzZWQgaW4gYSBNYXAuXG4vLyBUaGUgZmlyc3QgYWxsb2NhdGVkIGluZGV4IGlzIDEuXG52YXIgbmV4dEF2YWlsYWJsZVRocmVhZElEcyA9IG5ldyBVaW50MTZBcnJheSgxNik7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMTU7IGkrKykge1xuICBuZXh0QXZhaWxhYmxlVGhyZWFkSURzW2ldID0gaSArIDE7XG59XG5cbm5leHRBdmFpbGFibGVUaHJlYWRJRHNbMTVdID0gMDtcblxuZnVuY3Rpb24gZ3Jvd1RocmVhZENvdW50QW5kUmV0dXJuTmV4dEF2YWlsYWJsZSgpIHtcbiAgdmFyIG9sZEFycmF5ID0gbmV4dEF2YWlsYWJsZVRocmVhZElEcztcbiAgdmFyIG9sZFNpemUgPSBvbGRBcnJheS5sZW5ndGg7XG4gIHZhciBuZXdTaXplID0gb2xkU2l6ZSAqIDI7XG5cbiAgaWYgKCEobmV3U2l6ZSA8PSAweDEwMDAwKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKFwiTWF4aW11bSBudW1iZXIgb2YgY29uY3VycmVudCBSZWFjdCByZW5kZXJlcnMgZXhjZWVkZWQuIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgYXJlIG5vdCBwcm9wZXJseSBkZXN0cm95aW5nIHRoZSBSZWFkYWJsZSBwcm92aWRlZCBieSBSZWFjdC4gRW5zdXJlIHRoYXQgeW91IGNhbGwgLmRlc3Ryb3koKSBvbiBpdCBpZiB5b3Ugbm8gbG9uZ2VyIHdhbnQgdG8gcmVhZCBmcm9tIGl0LCBhbmQgZGlkIG5vdCByZWFkIHRvIHRoZSBlbmQuIElmIHlvdSB1c2UgLnBpcGUoKSB0aGlzIHNob3VsZCBiZSBhdXRvbWF0aWMuXCIpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBuZXdBcnJheSA9IG5ldyBVaW50MTZBcnJheShuZXdTaXplKTtcbiAgbmV3QXJyYXkuc2V0KG9sZEFycmF5KTtcbiAgbmV4dEF2YWlsYWJsZVRocmVhZElEcyA9IG5ld0FycmF5O1xuICBuZXh0QXZhaWxhYmxlVGhyZWFkSURzWzBdID0gb2xkU2l6ZSArIDE7XG5cbiAgZm9yICh2YXIgX2kgPSBvbGRTaXplOyBfaSA8IG5ld1NpemUgLSAxOyBfaSsrKSB7XG4gICAgbmV4dEF2YWlsYWJsZVRocmVhZElEc1tfaV0gPSBfaSArIDE7XG4gIH1cblxuICBuZXh0QXZhaWxhYmxlVGhyZWFkSURzW25ld1NpemUgLSAxXSA9IDA7XG4gIHJldHVybiBvbGRTaXplO1xufVxuXG5mdW5jdGlvbiBhbGxvY1RocmVhZElEKCkge1xuICB2YXIgbmV4dElEID0gbmV4dEF2YWlsYWJsZVRocmVhZElEc1swXTtcblxuICBpZiAobmV4dElEID09PSAwKSB7XG4gICAgcmV0dXJuIGdyb3dUaHJlYWRDb3VudEFuZFJldHVybk5leHRBdmFpbGFibGUoKTtcbiAgfVxuXG4gIG5leHRBdmFpbGFibGVUaHJlYWRJRHNbMF0gPSBuZXh0QXZhaWxhYmxlVGhyZWFkSURzW25leHRJRF07XG4gIHJldHVybiBuZXh0SUQ7XG59XG5mdW5jdGlvbiBmcmVlVGhyZWFkSUQoaWQpIHtcbiAgbmV4dEF2YWlsYWJsZVRocmVhZElEc1tpZF0gPSBuZXh0QXZhaWxhYmxlVGhyZWFkSURzWzBdO1xuICBuZXh0QXZhaWxhYmxlVGhyZWFkSURzWzBdID0gaWQ7XG59XG5cbi8vIEEgcmVzZXJ2ZWQgYXR0cmlidXRlLlxuLy8gSXQgaXMgaGFuZGxlZCBieSBSZWFjdCBzZXBhcmF0ZWx5IGFuZCBzaG91bGRuJ3QgYmUgd3JpdHRlbiB0byB0aGUgRE9NLlxudmFyIFJFU0VSVkVEID0gMDsgLy8gQSBzaW1wbGUgc3RyaW5nIGF0dHJpYnV0ZS5cbi8vIEF0dHJpYnV0ZXMgdGhhdCBhcmVuJ3QgaW4gdGhlIHdoaXRlbGlzdCBhcmUgcHJlc3VtZWQgdG8gaGF2ZSB0aGlzIHR5cGUuXG5cbnZhciBTVFJJTkcgPSAxOyAvLyBBIHN0cmluZyBhdHRyaWJ1dGUgdGhhdCBhY2NlcHRzIGJvb2xlYW5zIGluIFJlYWN0LiBJbiBIVE1MLCB0aGVzZSBhcmUgY2FsbGVkXG4vLyBcImVudW1lcmF0ZWRcIiBhdHRyaWJ1dGVzIHdpdGggXCJ0cnVlXCIgYW5kIFwiZmFsc2VcIiBhcyBwb3NzaWJsZSB2YWx1ZXMuXG4vLyBXaGVuIHRydWUsIGl0IHNob3VsZCBiZSBzZXQgdG8gYSBcInRydWVcIiBzdHJpbmcuXG4vLyBXaGVuIGZhbHNlLCBpdCBzaG91bGQgYmUgc2V0IHRvIGEgXCJmYWxzZVwiIHN0cmluZy5cblxudmFyIEJPT0xFQU5JU0hfU1RSSU5HID0gMjsgLy8gQSByZWFsIGJvb2xlYW4gYXR0cmlidXRlLlxuLy8gV2hlbiB0cnVlLCBpdCBzaG91bGQgYmUgcHJlc2VudCAoc2V0IGVpdGhlciB0byBhbiBlbXB0eSBzdHJpbmcgb3IgaXRzIG5hbWUpLlxuLy8gV2hlbiBmYWxzZSwgaXQgc2hvdWxkIGJlIG9taXR0ZWQuXG5cbnZhciBCT09MRUFOID0gMzsgLy8gQW4gYXR0cmlidXRlIHRoYXQgY2FuIGJlIHVzZWQgYXMgYSBmbGFnIGFzIHdlbGwgYXMgd2l0aCBhIHZhbHVlLlxuLy8gV2hlbiB0cnVlLCBpdCBzaG91bGQgYmUgcHJlc2VudCAoc2V0IGVpdGhlciB0byBhbiBlbXB0eSBzdHJpbmcgb3IgaXRzIG5hbWUpLlxuLy8gV2hlbiBmYWxzZSwgaXQgc2hvdWxkIGJlIG9taXR0ZWQuXG4vLyBGb3IgYW55IG90aGVyIHZhbHVlLCBzaG91bGQgYmUgcHJlc2VudCB3aXRoIHRoYXQgdmFsdWUuXG5cbnZhciBPVkVSTE9BREVEX0JPT0xFQU4gPSA0OyAvLyBBbiBhdHRyaWJ1dGUgdGhhdCBtdXN0IGJlIG51bWVyaWMgb3IgcGFyc2UgYXMgYSBudW1lcmljLlxuLy8gV2hlbiBmYWxzeSwgaXQgc2hvdWxkIGJlIHJlbW92ZWQuXG5cbnZhciBOVU1FUklDID0gNTsgLy8gQW4gYXR0cmlidXRlIHRoYXQgbXVzdCBiZSBwb3NpdGl2ZSBudW1lcmljIG9yIHBhcnNlIGFzIGEgcG9zaXRpdmUgbnVtZXJpYy5cbi8vIFdoZW4gZmFsc3ksIGl0IHNob3VsZCBiZSByZW1vdmVkLlxuXG52YXIgUE9TSVRJVkVfTlVNRVJJQyA9IDY7XG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbnZhciBBVFRSSUJVVEVfTkFNRV9TVEFSVF9DSEFSID0gXCI6QS1aX2EtelxcXFx1MDBDMC1cXFxcdTAwRDZcXFxcdTAwRDgtXFxcXHUwMEY2XFxcXHUwMEY4LVxcXFx1MDJGRlxcXFx1MDM3MC1cXFxcdTAzN0RcXFxcdTAzN0YtXFxcXHUxRkZGXFxcXHUyMDBDLVxcXFx1MjAwRFxcXFx1MjA3MC1cXFxcdTIxOEZcXFxcdTJDMDAtXFxcXHUyRkVGXFxcXHUzMDAxLVxcXFx1RDdGRlxcXFx1RjkwMC1cXFxcdUZEQ0ZcXFxcdUZERjAtXFxcXHVGRkZEXCI7XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cblxudmFyIEFUVFJJQlVURV9OQU1FX0NIQVIgPSBBVFRSSUJVVEVfTkFNRV9TVEFSVF9DSEFSICsgXCJcXFxcLS4wLTlcXFxcdTAwQjdcXFxcdTAzMDAtXFxcXHUwMzZGXFxcXHUyMDNGLVxcXFx1MjA0MFwiO1xuXG52YXIgUk9PVF9BVFRSSUJVVEVfTkFNRSA9ICdkYXRhLXJlYWN0cm9vdCc7XG52YXIgVkFMSURfQVRUUklCVVRFX05BTUVfUkVHRVggPSBuZXcgUmVnRXhwKCdeWycgKyBBVFRSSUJVVEVfTkFNRV9TVEFSVF9DSEFSICsgJ11bJyArIEFUVFJJQlVURV9OQU1FX0NIQVIgKyAnXSokJyk7XG52YXIgaGFzT3duUHJvcGVydHkkMSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgaWxsZWdhbEF0dHJpYnV0ZU5hbWVDYWNoZSA9IHt9O1xudmFyIHZhbGlkYXRlZEF0dHJpYnV0ZU5hbWVDYWNoZSA9IHt9O1xuZnVuY3Rpb24gaXNBdHRyaWJ1dGVOYW1lU2FmZShhdHRyaWJ1dGVOYW1lKSB7XG4gIGlmIChoYXNPd25Qcm9wZXJ0eSQxLmNhbGwodmFsaWRhdGVkQXR0cmlidXRlTmFtZUNhY2hlLCBhdHRyaWJ1dGVOYW1lKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGhhc093blByb3BlcnR5JDEuY2FsbChpbGxlZ2FsQXR0cmlidXRlTmFtZUNhY2hlLCBhdHRyaWJ1dGVOYW1lKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChWQUxJRF9BVFRSSUJVVEVfTkFNRV9SRUdFWC50ZXN0KGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgdmFsaWRhdGVkQXR0cmlidXRlTmFtZUNhY2hlW2F0dHJpYnV0ZU5hbWVdID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlsbGVnYWxBdHRyaWJ1dGVOYW1lQ2FjaGVbYXR0cmlidXRlTmFtZV0gPSB0cnVlO1xuXG4gIHtcbiAgICB3YXJuaW5nJDEoZmFsc2UsICdJbnZhbGlkIGF0dHJpYnV0ZSBuYW1lOiBgJXNgJywgYXR0cmlidXRlTmFtZSk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBzaG91bGRJZ25vcmVBdHRyaWJ1dGUobmFtZSwgcHJvcGVydHlJbmZvLCBpc0N1c3RvbUNvbXBvbmVudFRhZykge1xuICBpZiAocHJvcGVydHlJbmZvICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5SW5mby50eXBlID09PSBSRVNFUlZFRDtcbiAgfVxuXG4gIGlmIChpc0N1c3RvbUNvbXBvbmVudFRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChuYW1lLmxlbmd0aCA+IDIgJiYgKG5hbWVbMF0gPT09ICdvJyB8fCBuYW1lWzBdID09PSAnTycpICYmIChuYW1lWzFdID09PSAnbicgfHwgbmFtZVsxXSA9PT0gJ04nKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gc2hvdWxkUmVtb3ZlQXR0cmlidXRlV2l0aFdhcm5pbmcobmFtZSwgdmFsdWUsIHByb3BlcnR5SW5mbywgaXNDdXN0b21Db21wb25lbnRUYWcpIHtcbiAgaWYgKHByb3BlcnR5SW5mbyAhPT0gbnVsbCAmJiBwcm9wZXJ0eUluZm8udHlwZSA9PT0gUkVTRVJWRUQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgIGNhc2UgJ2Z1bmN0aW9uJzogLy8gJEZsb3dJc3N1ZSBzeW1ib2wgaXMgcGVyZmVjdGx5IHZhbGlkIGhlcmVcblxuICAgIGNhc2UgJ3N5bWJvbCc6XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAge1xuICAgICAgICBpZiAoaXNDdXN0b21Db21wb25lbnRUYWcpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcGVydHlJbmZvICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuICFwcm9wZXJ0eUluZm8uYWNjZXB0c0Jvb2xlYW5zO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBwcmVmaXggPSBuYW1lLnRvTG93ZXJDYXNlKCkuc2xpY2UoMCwgNSk7XG4gICAgICAgICAgcmV0dXJuIHByZWZpeCAhPT0gJ2RhdGEtJyAmJiBwcmVmaXggIT09ICdhcmlhLSc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbmZ1bmN0aW9uIHNob3VsZFJlbW92ZUF0dHJpYnV0ZShuYW1lLCB2YWx1ZSwgcHJvcGVydHlJbmZvLCBpc0N1c3RvbUNvbXBvbmVudFRhZykge1xuICBpZiAodmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHNob3VsZFJlbW92ZUF0dHJpYnV0ZVdpdGhXYXJuaW5nKG5hbWUsIHZhbHVlLCBwcm9wZXJ0eUluZm8sIGlzQ3VzdG9tQ29tcG9uZW50VGFnKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGlzQ3VzdG9tQ29tcG9uZW50VGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHByb3BlcnR5SW5mbyAhPT0gbnVsbCkge1xuICAgIHN3aXRjaCAocHJvcGVydHlJbmZvLnR5cGUpIHtcbiAgICAgIGNhc2UgQk9PTEVBTjpcbiAgICAgICAgcmV0dXJuICF2YWx1ZTtcblxuICAgICAgY2FzZSBPVkVSTE9BREVEX0JPT0xFQU46XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gZmFsc2U7XG5cbiAgICAgIGNhc2UgTlVNRVJJQzpcbiAgICAgICAgcmV0dXJuIGlzTmFOKHZhbHVlKTtcblxuICAgICAgY2FzZSBQT1NJVElWRV9OVU1FUklDOlxuICAgICAgICByZXR1cm4gaXNOYU4odmFsdWUpIHx8IHZhbHVlIDwgMTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBnZXRQcm9wZXJ0eUluZm8obmFtZSkge1xuICByZXR1cm4gcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/IHByb3BlcnRpZXNbbmFtZV0gOiBudWxsO1xufVxuXG5mdW5jdGlvbiBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgdHlwZSwgbXVzdFVzZVByb3BlcnR5LCBhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVOYW1lc3BhY2UsIHNhbml0aXplVVJMKSB7XG4gIHRoaXMuYWNjZXB0c0Jvb2xlYW5zID0gdHlwZSA9PT0gQk9PTEVBTklTSF9TVFJJTkcgfHwgdHlwZSA9PT0gQk9PTEVBTiB8fCB0eXBlID09PSBPVkVSTE9BREVEX0JPT0xFQU47XG4gIHRoaXMuYXR0cmlidXRlTmFtZSA9IGF0dHJpYnV0ZU5hbWU7XG4gIHRoaXMuYXR0cmlidXRlTmFtZXNwYWNlID0gYXR0cmlidXRlTmFtZXNwYWNlO1xuICB0aGlzLm11c3RVc2VQcm9wZXJ0eSA9IG11c3RVc2VQcm9wZXJ0eTtcbiAgdGhpcy5wcm9wZXJ0eU5hbWUgPSBuYW1lO1xuICB0aGlzLnR5cGUgPSB0eXBlO1xuICB0aGlzLnNhbml0aXplVVJMID0gc2FuaXRpemVVUkw7XG59IC8vIFdoZW4gYWRkaW5nIGF0dHJpYnV0ZXMgdG8gdGhpcyBsaXN0LCBiZSBzdXJlIHRvIGFsc28gYWRkIHRoZW0gdG9cbi8vIHRoZSBgcG9zc2libGVTdGFuZGFyZE5hbWVzYCBtb2R1bGUgdG8gZW5zdXJlIGNhc2luZyBhbmQgaW5jb3JyZWN0XG4vLyBuYW1lIHdhcm5pbmdzLlxuXG5cbnZhciBwcm9wZXJ0aWVzID0ge307IC8vIFRoZXNlIHByb3BzIGFyZSByZXNlcnZlZCBieSBSZWFjdC4gVGhleSBzaG91bGRuJ3QgYmUgd3JpdHRlbiB0byB0aGUgRE9NLlxuXG5bJ2NoaWxkcmVuJywgJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJywgLy8gVE9ETzogVGhpcyBwcmV2ZW50cyB0aGUgYXNzaWdubWVudCBvZiBkZWZhdWx0VmFsdWUgdG8gcmVndWxhclxuLy8gZWxlbWVudHMgKG5vdCBqdXN0IGlucHV0cykuIE5vdyB0aGF0IFJlYWN0RE9NSW5wdXQgYXNzaWducyB0byB0aGVcbi8vIGRlZmF1bHRWYWx1ZSBwcm9wZXJ0eSAtLSBkbyB3ZSBuZWVkIHRoaXM/XG4nZGVmYXVsdFZhbHVlJywgJ2RlZmF1bHRDaGVja2VkJywgJ2lubmVySFRNTCcsICdzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmcnLCAnc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nJywgJ3N0eWxlJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBSRVNFUlZFRCwgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBuYW1lLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICBmYWxzZSk7XG59KTsgLy8gQSBmZXcgUmVhY3Qgc3RyaW5nIGF0dHJpYnV0ZXMgaGF2ZSBhIGRpZmZlcmVudCBuYW1lLlxuLy8gVGhpcyBpcyBhIG1hcHBpbmcgZnJvbSBSZWFjdCBwcm9wIG5hbWVzIHRvIHRoZSBhdHRyaWJ1dGUgbmFtZXMuXG5cbltbJ2FjY2VwdENoYXJzZXQnLCAnYWNjZXB0LWNoYXJzZXQnXSwgWydjbGFzc05hbWUnLCAnY2xhc3MnXSwgWydodG1sRm9yJywgJ2ZvciddLCBbJ2h0dHBFcXVpdicsICdodHRwLWVxdWl2J11dLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIG5hbWUgPSBfcmVmWzBdLFxuICAgICAgYXR0cmlidXRlTmFtZSA9IF9yZWZbMV07XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIFNUUklORywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBhdHRyaWJ1dGVOYW1lLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICBmYWxzZSk7XG59KTsgLy8gVGhlc2UgYXJlIFwiZW51bWVyYXRlZFwiIEhUTUwgYXR0cmlidXRlcyB0aGF0IGFjY2VwdCBcInRydWVcIiBhbmQgXCJmYWxzZVwiLlxuLy8gSW4gUmVhY3QsIHdlIGxldCB1c2VycyBwYXNzIGB0cnVlYCBhbmQgYGZhbHNlYCBldmVuIHRob3VnaCB0ZWNobmljYWxseVxuLy8gdGhlc2UgYXJlbid0IGJvb2xlYW4gYXR0cmlidXRlcyAodGhleSBhcmUgY29lcmNlZCB0byBzdHJpbmdzKS5cblxuWydjb250ZW50RWRpdGFibGUnLCAnZHJhZ2dhYmxlJywgJ3NwZWxsQ2hlY2snLCAndmFsdWUnXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIEJPT0xFQU5JU0hfU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUudG9Mb3dlckNhc2UoKSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcbiAgZmFsc2UpO1xufSk7IC8vIFRoZXNlIGFyZSBcImVudW1lcmF0ZWRcIiBTVkcgYXR0cmlidXRlcyB0aGF0IGFjY2VwdCBcInRydWVcIiBhbmQgXCJmYWxzZVwiLlxuLy8gSW4gUmVhY3QsIHdlIGxldCB1c2VycyBwYXNzIGB0cnVlYCBhbmQgYGZhbHNlYCBldmVuIHRob3VnaCB0ZWNobmljYWxseVxuLy8gdGhlc2UgYXJlbid0IGJvb2xlYW4gYXR0cmlidXRlcyAodGhleSBhcmUgY29lcmNlZCB0byBzdHJpbmdzKS5cbi8vIFNpbmNlIHRoZXNlIGFyZSBTVkcgYXR0cmlidXRlcywgdGhlaXIgYXR0cmlidXRlIG5hbWVzIGFyZSBjYXNlLXNlbnNpdGl2ZS5cblxuWydhdXRvUmV2ZXJzZScsICdleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkJywgJ2ZvY3VzYWJsZScsICdwcmVzZXJ2ZUFscGhhJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBCT09MRUFOSVNIX1NUUklORywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBuYW1lLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICBmYWxzZSk7XG59KTsgLy8gVGhlc2UgYXJlIEhUTUwgYm9vbGVhbiBhdHRyaWJ1dGVzLlxuXG5bJ2FsbG93RnVsbFNjcmVlbicsICdhc3luYycsIC8vIE5vdGU6IHRoZXJlIGlzIGEgc3BlY2lhbCBjYXNlIHRoYXQgcHJldmVudHMgaXQgZnJvbSBiZWluZyB3cml0dGVuIHRvIHRoZSBET01cbi8vIG9uIHRoZSBjbGllbnQgc2lkZSBiZWNhdXNlIHRoZSBicm93c2VycyBhcmUgaW5jb25zaXN0ZW50LiBJbnN0ZWFkIHdlIGNhbGwgZm9jdXMoKS5cbidhdXRvRm9jdXMnLCAnYXV0b1BsYXknLCAnY29udHJvbHMnLCAnZGVmYXVsdCcsICdkZWZlcicsICdkaXNhYmxlZCcsICdkaXNhYmxlUGljdHVyZUluUGljdHVyZScsICdmb3JtTm9WYWxpZGF0ZScsICdoaWRkZW4nLCAnbG9vcCcsICdub01vZHVsZScsICdub1ZhbGlkYXRlJywgJ29wZW4nLCAncGxheXNJbmxpbmUnLCAncmVhZE9ubHknLCAncmVxdWlyZWQnLCAncmV2ZXJzZWQnLCAnc2NvcGVkJywgJ3NlYW1sZXNzJywgLy8gTWljcm9kYXRhXG4naXRlbVNjb3BlJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBCT09MRUFOLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUudG9Mb3dlckNhc2UoKSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcbiAgZmFsc2UpO1xufSk7IC8vIFRoZXNlIGFyZSB0aGUgZmV3IFJlYWN0IHByb3BzIHRoYXQgd2Ugc2V0IGFzIERPTSBwcm9wZXJ0aWVzXG4vLyByYXRoZXIgdGhhbiBhdHRyaWJ1dGVzLiBUaGVzZSBhcmUgYWxsIGJvb2xlYW5zLlxuXG5bJ2NoZWNrZWQnLCAvLyBOb3RlOiBgb3B0aW9uLnNlbGVjdGVkYCBpcyBub3QgdXBkYXRlZCBpZiBgc2VsZWN0Lm11bHRpcGxlYCBpc1xuLy8gZGlzYWJsZWQgd2l0aCBgcmVtb3ZlQXR0cmlidXRlYC4gV2UgaGF2ZSBzcGVjaWFsIGxvZ2ljIGZvciBoYW5kbGluZyB0aGlzLlxuJ211bHRpcGxlJywgJ211dGVkJywgJ3NlbGVjdGVkJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBCT09MRUFOLCB0cnVlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgbmFtZSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcbiAgZmFsc2UpO1xufSk7IC8vIFRoZXNlIGFyZSBIVE1MIGF0dHJpYnV0ZXMgdGhhdCBhcmUgXCJvdmVybG9hZGVkIGJvb2xlYW5zXCI6IHRoZXkgYmVoYXZlIGxpa2Vcbi8vIGJvb2xlYW5zLCBidXQgY2FuIGFsc28gYWNjZXB0IGEgc3RyaW5nIHZhbHVlLlxuXG5bJ2NhcHR1cmUnLCAnZG93bmxvYWQnXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIE9WRVJMT0FERURfQk9PTEVBTiwgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBuYW1lLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICBmYWxzZSk7XG59KTsgLy8gVGhlc2UgYXJlIEhUTUwgYXR0cmlidXRlcyB0aGF0IG11c3QgYmUgcG9zaXRpdmUgbnVtYmVycy5cblxuWydjb2xzJywgJ3Jvd3MnLCAnc2l6ZScsICdzcGFuJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBQT1NJVElWRV9OVU1FUklDLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUsIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4gIGZhbHNlKTtcbn0pOyAvLyBUaGVzZSBhcmUgSFRNTCBhdHRyaWJ1dGVzIHRoYXQgbXVzdCBiZSBudW1iZXJzLlxuXG5bJ3Jvd1NwYW4nLCAnc3RhcnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIE5VTUVSSUMsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgbmFtZS50b0xvd2VyQ2FzZSgpLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICBmYWxzZSk7XG59KTtcbnZhciBDQU1FTElaRSA9IC9bXFwtXFw6XShbYS16XSkvZztcblxudmFyIGNhcGl0YWxpemUgPSBmdW5jdGlvbiAodG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuWzFdLnRvVXBwZXJDYXNlKCk7XG59OyAvLyBUaGlzIGlzIGEgbGlzdCBvZiBhbGwgU1ZHIGF0dHJpYnV0ZXMgdGhhdCBuZWVkIHNwZWNpYWwgY2FzaW5nLCBuYW1lc3BhY2luZyxcbi8vIG9yIGJvb2xlYW4gdmFsdWUgYXNzaWdubWVudC4gUmVndWxhciBhdHRyaWJ1dGVzIHRoYXQganVzdCBhY2NlcHQgc3RyaW5nc1xuLy8gYW5kIGhhdmUgdGhlIHNhbWUgbmFtZXMgYXJlIG9taXR0ZWQsIGp1c3QgbGlrZSBpbiB0aGUgSFRNTCB3aGl0ZWxpc3QuXG4vLyBTb21lIG9mIHRoZXNlIGF0dHJpYnV0ZXMgY2FuIGJlIGhhcmQgdG8gZmluZC4gVGhpcyBsaXN0IHdhcyBjcmVhdGVkIGJ5XG4vLyBzY3JhcHBpbmcgdGhlIE1ETiBkb2N1bWVudGF0aW9uLlxuXG5cblsnYWNjZW50LWhlaWdodCcsICdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnYXJhYmljLWZvcm0nLCAnYmFzZWxpbmUtc2hpZnQnLCAnY2FwLWhlaWdodCcsICdjbGlwLXBhdGgnLCAnY2xpcC1ydWxlJywgJ2NvbG9yLWludGVycG9sYXRpb24nLCAnY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzJywgJ2NvbG9yLXByb2ZpbGUnLCAnY29sb3ItcmVuZGVyaW5nJywgJ2RvbWluYW50LWJhc2VsaW5lJywgJ2VuYWJsZS1iYWNrZ3JvdW5kJywgJ2ZpbGwtb3BhY2l0eScsICdmaWxsLXJ1bGUnLCAnZmxvb2QtY29sb3InLCAnZmxvb2Qtb3BhY2l0eScsICdmb250LWZhbWlseScsICdmb250LXNpemUnLCAnZm9udC1zaXplLWFkanVzdCcsICdmb250LXN0cmV0Y2gnLCAnZm9udC1zdHlsZScsICdmb250LXZhcmlhbnQnLCAnZm9udC13ZWlnaHQnLCAnZ2x5cGgtbmFtZScsICdnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsJywgJ2dseXBoLW9yaWVudGF0aW9uLXZlcnRpY2FsJywgJ2hvcml6LWFkdi14JywgJ2hvcml6LW9yaWdpbi14JywgJ2ltYWdlLXJlbmRlcmluZycsICdsZXR0ZXItc3BhY2luZycsICdsaWdodGluZy1jb2xvcicsICdtYXJrZXItZW5kJywgJ21hcmtlci1taWQnLCAnbWFya2VyLXN0YXJ0JywgJ292ZXJsaW5lLXBvc2l0aW9uJywgJ292ZXJsaW5lLXRoaWNrbmVzcycsICdwYWludC1vcmRlcicsICdwYW5vc2UtMScsICdwb2ludGVyLWV2ZW50cycsICdyZW5kZXJpbmctaW50ZW50JywgJ3NoYXBlLXJlbmRlcmluZycsICdzdG9wLWNvbG9yJywgJ3N0b3Atb3BhY2l0eScsICdzdHJpa2V0aHJvdWdoLXBvc2l0aW9uJywgJ3N0cmlrZXRocm91Z2gtdGhpY2tuZXNzJywgJ3N0cm9rZS1kYXNoYXJyYXknLCAnc3Ryb2tlLWRhc2hvZmZzZXQnLCAnc3Ryb2tlLWxpbmVjYXAnLCAnc3Ryb2tlLWxpbmVqb2luJywgJ3N0cm9rZS1taXRlcmxpbWl0JywgJ3N0cm9rZS1vcGFjaXR5JywgJ3N0cm9rZS13aWR0aCcsICd0ZXh0LWFuY2hvcicsICd0ZXh0LWRlY29yYXRpb24nLCAndGV4dC1yZW5kZXJpbmcnLCAndW5kZXJsaW5lLXBvc2l0aW9uJywgJ3VuZGVybGluZS10aGlja25lc3MnLCAndW5pY29kZS1iaWRpJywgJ3VuaWNvZGUtcmFuZ2UnLCAndW5pdHMtcGVyLWVtJywgJ3YtYWxwaGFiZXRpYycsICd2LWhhbmdpbmcnLCAndi1pZGVvZ3JhcGhpYycsICd2LW1hdGhlbWF0aWNhbCcsICd2ZWN0b3ItZWZmZWN0JywgJ3ZlcnQtYWR2LXknLCAndmVydC1vcmlnaW4teCcsICd2ZXJ0LW9yaWdpbi15JywgJ3dvcmQtc3BhY2luZycsICd3cml0aW5nLW1vZGUnLCAneG1sbnM6eGxpbmsnLCAneC1oZWlnaHQnXS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGVOYW1lKSB7XG4gIHZhciBuYW1lID0gYXR0cmlidXRlTmFtZS5yZXBsYWNlKENBTUVMSVpFLCBjYXBpdGFsaXplKTtcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIGF0dHJpYnV0ZU5hbWUsIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICBmYWxzZSk7XG59KTsgLy8gU3RyaW5nIFNWRyBhdHRyaWJ1dGVzIHdpdGggdGhlIHhsaW5rIG5hbWVzcGFjZS5cblxuWyd4bGluazphY3R1YXRlJywgJ3hsaW5rOmFyY3JvbGUnLCAneGxpbms6cm9sZScsICd4bGluazpzaG93JywgJ3hsaW5rOnRpdGxlJywgJ3hsaW5rOnR5cGUnXS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGVOYW1lKSB7XG4gIHZhciBuYW1lID0gYXR0cmlidXRlTmFtZS5yZXBsYWNlKENBTUVMSVpFLCBjYXBpdGFsaXplKTtcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIGF0dHJpYnV0ZU5hbWUsICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgZmFsc2UpO1xufSk7IC8vIFN0cmluZyBTVkcgYXR0cmlidXRlcyB3aXRoIHRoZSB4bWwgbmFtZXNwYWNlLlxuXG5bJ3htbDpiYXNlJywgJ3htbDpsYW5nJywgJ3htbDpzcGFjZSddLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZU5hbWUpIHtcbiAgdmFyIG5hbWUgPSBhdHRyaWJ1dGVOYW1lLnJlcGxhY2UoQ0FNRUxJWkUsIGNhcGl0YWxpemUpO1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBTVFJJTkcsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgYXR0cmlidXRlTmFtZSwgJ2h0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZScsIGZhbHNlKTtcbn0pOyAvLyBUaGVzZSBhdHRyaWJ1dGUgZXhpc3RzIGJvdGggaW4gSFRNTCBhbmQgU1ZHLlxuLy8gVGhlIGF0dHJpYnV0ZSBuYW1lIGlzIGNhc2Utc2Vuc2l0aXZlIGluIFNWRyBzbyB3ZSBjYW4ndCBqdXN0IHVzZVxuLy8gdGhlIFJlYWN0IG5hbWUgbGlrZSB3ZSBkbyBmb3IgYXR0cmlidXRlcyB0aGF0IGV4aXN0IG9ubHkgaW4gSFRNTC5cblxuWyd0YWJJbmRleCcsICdjcm9zc09yaWdpbiddLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZU5hbWUpIHtcbiAgcHJvcGVydGllc1thdHRyaWJ1dGVOYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQoYXR0cmlidXRlTmFtZSwgU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIGF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcbiAgZmFsc2UpO1xufSk7IC8vIFRoZXNlIGF0dHJpYnV0ZXMgYWNjZXB0IFVSTHMuIFRoZXNlIG11c3Qgbm90IGFsbG93IGphdmFzY3JpcHQ6IFVSTFMuXG4vLyBUaGVzZSB3aWxsIGFsc28gbmVlZCB0byBhY2NlcHQgVHJ1c3RlZCBUeXBlcyBvYmplY3QgaW4gdGhlIGZ1dHVyZS5cblxudmFyIHhsaW5rSHJlZiA9ICd4bGlua0hyZWYnO1xucHJvcGVydGllc1t4bGlua0hyZWZdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZCgneGxpbmtIcmVmJywgU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4neGxpbms6aHJlZicsICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgdHJ1ZSk7XG5bJ3NyYycsICdocmVmJywgJ2FjdGlvbicsICdmb3JtQWN0aW9uJ10uZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlTmFtZSkge1xuICBwcm9wZXJ0aWVzW2F0dHJpYnV0ZU5hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChhdHRyaWJ1dGVOYW1lLCBTVFJJTkcsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgYXR0cmlidXRlTmFtZS50b0xvd2VyQ2FzZSgpLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICB0cnVlKTtcbn0pO1xuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQyID0gbnVsbDtcblxue1xuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xufSAvLyBBIGphdmFzY3JpcHQ6IFVSTCBjYW4gY29udGFpbiBsZWFkaW5nIEMwIGNvbnRyb2wgb3IgXFx1MDAyMCBTUEFDRSxcbi8vIGFuZCBhbnkgbmV3bGluZSBvciB0YWIgYXJlIGZpbHRlcmVkIG91dCBhcyBpZiB0aGV5J3JlIG5vdCBwYXJ0IG9mIHRoZSBVUkwuXG4vLyBodHRwczovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybC1wYXJzaW5nXG4vLyBUYWIgb3IgbmV3bGluZSBhcmUgZGVmaW5lZCBhcyBcXHJcXG5cXHQ6XG4vLyBodHRwczovL2luZnJhLnNwZWMud2hhdHdnLm9yZy8jYXNjaWktdGFiLW9yLW5ld2xpbmVcbi8vIEEgQzAgY29udHJvbCBpcyBhIGNvZGUgcG9pbnQgaW4gdGhlIHJhbmdlIFxcdTAwMDAgTlVMTCB0byBcXHUwMDFGXG4vLyBJTkZPUk1BVElPTiBTRVBBUkFUT1IgT05FLCBpbmNsdXNpdmU6XG4vLyBodHRwczovL2luZnJhLnNwZWMud2hhdHdnLm9yZy8jYzAtY29udHJvbC1vci1zcGFjZVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5cblxudmFyIGlzSmF2YVNjcmlwdFByb3RvY29sID0gL15bXFx1MDAwMC1cXHUwMDFGIF0qaltcXHJcXG5cXHRdKmFbXFxyXFxuXFx0XSp2W1xcclxcblxcdF0qYVtcXHJcXG5cXHRdKnNbXFxyXFxuXFx0XSpjW1xcclxcblxcdF0qcltcXHJcXG5cXHRdKmlbXFxyXFxuXFx0XSpwW1xcclxcblxcdF0qdFtcXHJcXG5cXHRdKlxcOi9pO1xudmFyIGRpZFdhcm4gPSBmYWxzZTtcblxuZnVuY3Rpb24gc2FuaXRpemVVUkwodXJsKSB7XG4gIGlmIChkaXNhYmxlSmF2YVNjcmlwdFVSTHMpIHtcbiAgICBpZiAoISFpc0phdmFTY3JpcHRQcm90b2NvbC50ZXN0KHVybCkpIHtcbiAgICAgIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJSZWFjdCBoYXMgYmxvY2tlZCBhIGphdmFzY3JpcHQ6IFVSTCBhcyBhIHNlY3VyaXR5IHByZWNhdXRpb24uXCIgKyAoUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQyLmdldFN0YWNrQWRkZW5kdW0oKSkpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmICh0cnVlICYmICFkaWRXYXJuICYmIGlzSmF2YVNjcmlwdFByb3RvY29sLnRlc3QodXJsKSkge1xuICAgIGRpZFdhcm4gPSB0cnVlO1xuICAgIHdhcm5pbmckMShmYWxzZSwgJ0EgZnV0dXJlIHZlcnNpb24gb2YgUmVhY3Qgd2lsbCBibG9jayBqYXZhc2NyaXB0OiBVUkxzIGFzIGEgc2VjdXJpdHkgcHJlY2F1dGlvbi4gJyArICdVc2UgZXZlbnQgaGFuZGxlcnMgaW5zdGVhZCBpZiB5b3UgY2FuLiBJZiB5b3UgbmVlZCB0byBnZW5lcmF0ZSB1bnNhZmUgSFRNTCB0cnkgJyArICd1c2luZyBkYW5nZXJvdXNseVNldElubmVySFRNTCBpbnN0ZWFkLiBSZWFjdCB3YXMgcGFzc2VkICVzLicsIEpTT04uc3RyaW5naWZ5KHVybCkpO1xuICB9XG59XG5cbi8vIGNvZGUgY29waWVkIGFuZCBtb2RpZmllZCBmcm9tIGVzY2FwZS1odG1sXG5cbi8qKlxuICogTW9kdWxlIHZhcmlhYmxlcy5cbiAqIEBwcml2YXRlXG4gKi9cbnZhciBtYXRjaEh0bWxSZWdFeHAgPSAvW1wiJyY8Pl0vO1xuLyoqXG4gKiBFc2NhcGVzIHNwZWNpYWwgY2hhcmFjdGVycyBhbmQgSFRNTCBlbnRpdGllcyBpbiBhIGdpdmVuIGh0bWwgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyaW5nIEhUTUwgc3RyaW5nIHRvIGVzY2FwZSBmb3IgbGF0ZXIgaW5zZXJ0aW9uXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlSHRtbChzdHJpbmcpIHtcbiAgdmFyIHN0ciA9ICcnICsgc3RyaW5nO1xuICB2YXIgbWF0Y2ggPSBtYXRjaEh0bWxSZWdFeHAuZXhlYyhzdHIpO1xuXG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgdmFyIGVzY2FwZTtcbiAgdmFyIGh0bWwgPSAnJztcbiAgdmFyIGluZGV4O1xuICB2YXIgbGFzdEluZGV4ID0gMDtcblxuICBmb3IgKGluZGV4ID0gbWF0Y2guaW5kZXg7IGluZGV4IDwgc3RyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHN3aXRjaCAoc3RyLmNoYXJDb2RlQXQoaW5kZXgpKSB7XG4gICAgICBjYXNlIDM0OlxuICAgICAgICAvLyBcIlxuICAgICAgICBlc2NhcGUgPSAnJnF1b3Q7JztcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMzg6XG4gICAgICAgIC8vICZcbiAgICAgICAgZXNjYXBlID0gJyZhbXA7JztcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMzk6XG4gICAgICAgIC8vICdcbiAgICAgICAgZXNjYXBlID0gJyYjeDI3Oyc7IC8vIG1vZGlmaWVkIGZyb20gZXNjYXBlLWh0bWw7IHVzZWQgdG8gYmUgJyYjMzknXG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgNjA6XG4gICAgICAgIC8vIDxcbiAgICAgICAgZXNjYXBlID0gJyZsdDsnO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA2MjpcbiAgICAgICAgLy8gPlxuICAgICAgICBlc2NhcGUgPSAnJmd0Oyc7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAobGFzdEluZGV4ICE9PSBpbmRleCkge1xuICAgICAgaHRtbCArPSBzdHIuc3Vic3RyaW5nKGxhc3RJbmRleCwgaW5kZXgpO1xuICAgIH1cblxuICAgIGxhc3RJbmRleCA9IGluZGV4ICsgMTtcbiAgICBodG1sICs9IGVzY2FwZTtcbiAgfVxuXG4gIHJldHVybiBsYXN0SW5kZXggIT09IGluZGV4ID8gaHRtbCArIHN0ci5zdWJzdHJpbmcobGFzdEluZGV4LCBpbmRleCkgOiBodG1sO1xufSAvLyBlbmQgY29kZSBjb3BpZWQgYW5kIG1vZGlmaWVkIGZyb20gZXNjYXBlLWh0bWxcblxuLyoqXG4gKiBFc2NhcGVzIHRleHQgdG8gcHJldmVudCBzY3JpcHRpbmcgYXR0YWNrcy5cbiAqXG4gKiBAcGFyYW0geyp9IHRleHQgVGV4dCB2YWx1ZSB0byBlc2NhcGUuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEFuIGVzY2FwZWQgc3RyaW5nLlxuICovXG5cblxuZnVuY3Rpb24gZXNjYXBlVGV4dEZvckJyb3dzZXIodGV4dCkge1xuICBpZiAodHlwZW9mIHRleHQgPT09ICdib29sZWFuJyB8fCB0eXBlb2YgdGV4dCA9PT0gJ251bWJlcicpIHtcbiAgICAvLyB0aGlzIHNob3J0Y2lyY3VpdCBoZWxwcyBwZXJmIGZvciB0eXBlcyB0aGF0IHdlIGtub3cgd2lsbCBuZXZlciBoYXZlXG4gICAgLy8gc3BlY2lhbCBjaGFyYWN0ZXJzLCBlc3BlY2lhbGx5IGdpdmVuIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyB1c2VkIG9mdGVuXG4gICAgLy8gZm9yIG51bWVyaWMgZG9tIGlkcy5cbiAgICByZXR1cm4gJycgKyB0ZXh0O1xuICB9XG5cbiAgcmV0dXJuIGVzY2FwZUh0bWwodGV4dCk7XG59XG5cbi8qKlxuICogRXNjYXBlcyBhdHRyaWJ1dGUgdmFsdWUgdG8gcHJldmVudCBzY3JpcHRpbmcgYXR0YWNrcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFZhbHVlIHRvIGVzY2FwZS5cbiAqIEByZXR1cm4ge3N0cmluZ30gQW4gZXNjYXBlZCBzdHJpbmcuXG4gKi9cblxuZnVuY3Rpb24gcXVvdGVBdHRyaWJ1dGVWYWx1ZUZvckJyb3dzZXIodmFsdWUpIHtcbiAgcmV0dXJuICdcIicgKyBlc2NhcGVUZXh0Rm9yQnJvd3Nlcih2YWx1ZSkgKyAnXCInO1xufVxuXG4vKipcbiAqIE9wZXJhdGlvbnMgZm9yIGRlYWxpbmcgd2l0aCBET00gcHJvcGVydGllcy5cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgbWFya3VwIGZvciB0aGUgSUQgcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGlkIFVuZXNjYXBlZCBJRC5cbiAqIEByZXR1cm4ge3N0cmluZ30gTWFya3VwIHN0cmluZy5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZU1hcmt1cEZvclJvb3QoKSB7XG4gIHJldHVybiBST09UX0FUVFJJQlVURV9OQU1FICsgJz1cIlwiJztcbn1cbi8qKlxuICogQ3JlYXRlcyBtYXJrdXAgZm9yIGEgcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm4gez9zdHJpbmd9IE1hcmt1cCBzdHJpbmcsIG9yIG51bGwgaWYgdGhlIHByb3BlcnR5IHdhcyBpbnZhbGlkLlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZU1hcmt1cEZvclByb3BlcnR5KG5hbWUsIHZhbHVlKSB7XG4gIHZhciBwcm9wZXJ0eUluZm8gPSBnZXRQcm9wZXJ0eUluZm8obmFtZSk7XG5cbiAgaWYgKG5hbWUgIT09ICdzdHlsZScgJiYgc2hvdWxkSWdub3JlQXR0cmlidXRlKG5hbWUsIHByb3BlcnR5SW5mbywgZmFsc2UpKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHNob3VsZFJlbW92ZUF0dHJpYnV0ZShuYW1lLCB2YWx1ZSwgcHJvcGVydHlJbmZvLCBmYWxzZSkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAocHJvcGVydHlJbmZvICE9PSBudWxsKSB7XG4gICAgdmFyIGF0dHJpYnV0ZU5hbWUgPSBwcm9wZXJ0eUluZm8uYXR0cmlidXRlTmFtZTtcbiAgICB2YXIgdHlwZSA9IHByb3BlcnR5SW5mby50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IEJPT0xFQU4gfHwgdHlwZSA9PT0gT1ZFUkxPQURFRF9CT09MRUFOICYmIHZhbHVlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gYXR0cmlidXRlTmFtZSArICc9XCJcIic7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcm9wZXJ0eUluZm8uc2FuaXRpemVVUkwpIHtcbiAgICAgICAgdmFsdWUgPSAnJyArIHZhbHVlO1xuICAgICAgICBzYW5pdGl6ZVVSTCh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lICsgJz0nICsgcXVvdGVBdHRyaWJ1dGVWYWx1ZUZvckJyb3dzZXIodmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc0F0dHJpYnV0ZU5hbWVTYWZlKG5hbWUpKSB7XG4gICAgcmV0dXJuIG5hbWUgKyAnPScgKyBxdW90ZUF0dHJpYnV0ZVZhbHVlRm9yQnJvd3Nlcih2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG4vKipcbiAqIENyZWF0ZXMgbWFya3VwIGZvciBhIGN1c3RvbSBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybiB7c3RyaW5nfSBNYXJrdXAgc3RyaW5nLCBvciBlbXB0eSBzdHJpbmcgaWYgdGhlIHByb3BlcnR5IHdhcyBpbnZhbGlkLlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZU1hcmt1cEZvckN1c3RvbUF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICBpZiAoIWlzQXR0cmlidXRlTmFtZVNhZmUobmFtZSkgfHwgdmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiBuYW1lICsgJz0nICsgcXVvdGVBdHRyaWJ1dGVWYWx1ZUZvckJyb3dzZXIodmFsdWUpO1xufVxuXG4vKipcbiAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICovXG5mdW5jdGlvbiBpcyh4LCB5KSB7XG4gIHJldHVybiB4ID09PSB5ICYmICh4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSkgfHwgeCAhPT0geCAmJiB5ICE9PSB5IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gIDtcbn1cblxudmFyIGlzJDEgPSB0eXBlb2YgT2JqZWN0LmlzID09PSAnZnVuY3Rpb24nID8gT2JqZWN0LmlzIDogaXM7XG5cbnZhciBjdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQgPSBudWxsO1xudmFyIGZpcnN0V29ya0luUHJvZ3Jlc3NIb29rID0gbnVsbDtcbnZhciB3b3JrSW5Qcm9ncmVzc0hvb2sgPSBudWxsOyAvLyBXaGV0aGVyIHRoZSB3b3JrLWluLXByb2dyZXNzIGhvb2sgaXMgYSByZS1yZW5kZXJlZCBob29rXG5cbnZhciBpc1JlUmVuZGVyID0gZmFsc2U7IC8vIFdoZXRoZXIgYW4gdXBkYXRlIHdhcyBzY2hlZHVsZWQgZHVyaW5nIHRoZSBjdXJyZW50bHkgZXhlY3V0aW5nIHJlbmRlciBwYXNzLlxuXG52YXIgZGlkU2NoZWR1bGVSZW5kZXJQaGFzZVVwZGF0ZSA9IGZhbHNlOyAvLyBMYXppbHkgY3JlYXRlZCBtYXAgb2YgcmVuZGVyLXBoYXNlIHVwZGF0ZXNcblxudmFyIHJlbmRlclBoYXNlVXBkYXRlcyA9IG51bGw7IC8vIENvdW50ZXIgdG8gcHJldmVudCBpbmZpbml0ZSBsb29wcy5cblxudmFyIG51bWJlck9mUmVSZW5kZXJzID0gMDtcbnZhciBSRV9SRU5ERVJfTElNSVQgPSAyNTtcbnZhciBpc0luSG9va1VzZXJDb2RlSW5EZXYgPSBmYWxzZTsgLy8gSW4gREVWLCB0aGlzIGlzIHRoZSBuYW1lIG9mIHRoZSBjdXJyZW50bHkgZXhlY3V0aW5nIHByaW1pdGl2ZSBob29rXG5cbnZhciBjdXJyZW50SG9va05hbWVJbkRldjtcblxuZnVuY3Rpb24gcmVzb2x2ZUN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCgpIHtcbiAgaWYgKCEoY3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50ICE9PSBudWxsKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKFwiSW52YWxpZCBob29rIGNhbGwuIEhvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgb2YgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuIFRoaXMgY291bGQgaGFwcGVuIGZvciBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbjEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbjIuIFlvdSBtaWdodCBiZSBicmVha2luZyB0aGUgUnVsZXMgb2YgSG9va3NcXG4zLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuU2VlIGh0dHBzOi8vZmIubWUvcmVhY3QtaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLlwiKTtcbiAgICB9XG4gIH1cblxuICB7XG4gICAgISFpc0luSG9va1VzZXJDb2RlSW5EZXYgPyB3YXJuaW5nJDEoZmFsc2UsICdEbyBub3QgY2FsbCBIb29rcyBpbnNpZGUgdXNlRWZmZWN0KC4uLiksIHVzZU1lbW8oLi4uKSwgb3Igb3RoZXIgYnVpbHQtaW4gSG9va3MuICcgKyAnWW91IGNhbiBvbmx5IGNhbGwgSG9va3MgYXQgdGhlIHRvcCBsZXZlbCBvZiB5b3VyIFJlYWN0IGZ1bmN0aW9uLiAnICsgJ0ZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgJyArICdodHRwczovL2ZiLm1lL3J1bGVzLW9mLWhvb2tzJykgOiB2b2lkIDA7XG4gIH1cblxuICByZXR1cm4gY3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50O1xufVxuXG5mdW5jdGlvbiBhcmVIb29rSW5wdXRzRXF1YWwobmV4dERlcHMsIHByZXZEZXBzKSB7XG4gIGlmIChwcmV2RGVwcyA9PT0gbnVsbCkge1xuICAgIHtcbiAgICAgIHdhcm5pbmckMShmYWxzZSwgJyVzIHJlY2VpdmVkIGEgZmluYWwgYXJndW1lbnQgZHVyaW5nIHRoaXMgcmVuZGVyLCBidXQgbm90IGR1cmluZyAnICsgJ3RoZSBwcmV2aW91cyByZW5kZXIuIEV2ZW4gdGhvdWdoIHRoZSBmaW5hbCBhcmd1bWVudCBpcyBvcHRpb25hbCwgJyArICdpdHMgdHlwZSBjYW5ub3QgY2hhbmdlIGJldHdlZW4gcmVuZGVycy4nLCBjdXJyZW50SG9va05hbWVJbkRldik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAge1xuICAgIC8vIERvbid0IGJvdGhlciBjb21wYXJpbmcgbGVuZ3RocyBpbiBwcm9kIGJlY2F1c2UgdGhlc2UgYXJyYXlzIHNob3VsZCBiZVxuICAgIC8vIHBhc3NlZCBpbmxpbmUuXG4gICAgaWYgKG5leHREZXBzLmxlbmd0aCAhPT0gcHJldkRlcHMubGVuZ3RoKSB7XG4gICAgICB3YXJuaW5nJDEoZmFsc2UsICdUaGUgZmluYWwgYXJndW1lbnQgcGFzc2VkIHRvICVzIGNoYW5nZWQgc2l6ZSBiZXR3ZWVuIHJlbmRlcnMuIFRoZSAnICsgJ29yZGVyIGFuZCBzaXplIG9mIHRoaXMgYXJyYXkgbXVzdCByZW1haW4gY29uc3RhbnQuXFxuXFxuJyArICdQcmV2aW91czogJXNcXG4nICsgJ0luY29taW5nOiAlcycsIGN1cnJlbnRIb29rTmFtZUluRGV2LCBcIltcIiArIG5leHREZXBzLmpvaW4oJywgJykgKyBcIl1cIiwgXCJbXCIgKyBwcmV2RGVwcy5qb2luKCcsICcpICsgXCJdXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJldkRlcHMubGVuZ3RoICYmIGkgPCBuZXh0RGVwcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChpcyQxKG5leHREZXBzW2ldLCBwcmV2RGVwc1tpXSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb29rKCkge1xuICBpZiAobnVtYmVyT2ZSZVJlbmRlcnMgPiAwKSB7XG4gICAge1xuICAgICAge1xuICAgICAgICB0aHJvdyBFcnJvcihcIlJlbmRlcmVkIG1vcmUgaG9va3MgdGhhbiBkdXJpbmcgdGhlIHByZXZpb3VzIHJlbmRlclwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1lbW9pemVkU3RhdGU6IG51bGwsXG4gICAgcXVldWU6IG51bGwsXG4gICAgbmV4dDogbnVsbFxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVXb3JrSW5Qcm9ncmVzc0hvb2soKSB7XG4gIGlmICh3b3JrSW5Qcm9ncmVzc0hvb2sgPT09IG51bGwpIHtcbiAgICAvLyBUaGlzIGlzIHRoZSBmaXJzdCBob29rIGluIHRoZSBsaXN0XG4gICAgaWYgKGZpcnN0V29ya0luUHJvZ3Jlc3NIb29rID09PSBudWxsKSB7XG4gICAgICBpc1JlUmVuZGVyID0gZmFsc2U7XG4gICAgICBmaXJzdFdvcmtJblByb2dyZXNzSG9vayA9IHdvcmtJblByb2dyZXNzSG9vayA9IGNyZWF0ZUhvb2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhlcmUncyBhbHJlYWR5IGEgd29yay1pbi1wcm9ncmVzcy4gUmV1c2UgaXQuXG4gICAgICBpc1JlUmVuZGVyID0gdHJ1ZTtcbiAgICAgIHdvcmtJblByb2dyZXNzSG9vayA9IGZpcnN0V29ya0luUHJvZ3Jlc3NIb29rO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAod29ya0luUHJvZ3Jlc3NIb29rLm5leHQgPT09IG51bGwpIHtcbiAgICAgIGlzUmVSZW5kZXIgPSBmYWxzZTsgLy8gQXBwZW5kIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3RcblxuICAgICAgd29ya0luUHJvZ3Jlc3NIb29rID0gd29ya0luUHJvZ3Jlc3NIb29rLm5leHQgPSBjcmVhdGVIb29rKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZXJlJ3MgYWxyZWFkeSBhIHdvcmstaW4tcHJvZ3Jlc3MuIFJldXNlIGl0LlxuICAgICAgaXNSZVJlbmRlciA9IHRydWU7XG4gICAgICB3b3JrSW5Qcm9ncmVzc0hvb2sgPSB3b3JrSW5Qcm9ncmVzc0hvb2submV4dDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gd29ya0luUHJvZ3Jlc3NIb29rO1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlVG9Vc2VIb29rcyhjb21wb25lbnRJZGVudGl0eSkge1xuICBjdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQgPSBjb21wb25lbnRJZGVudGl0eTtcblxuICB7XG4gICAgaXNJbkhvb2tVc2VyQ29kZUluRGV2ID0gZmFsc2U7XG4gIH0gLy8gVGhlIGZvbGxvd2luZyBzaG91bGQgaGF2ZSBhbHJlYWR5IGJlZW4gcmVzZXRcbiAgLy8gZGlkU2NoZWR1bGVSZW5kZXJQaGFzZVVwZGF0ZSA9IGZhbHNlO1xuICAvLyBmaXJzdFdvcmtJblByb2dyZXNzSG9vayA9IG51bGw7XG4gIC8vIG51bWJlck9mUmVSZW5kZXJzID0gMDtcbiAgLy8gcmVuZGVyUGhhc2VVcGRhdGVzID0gbnVsbDtcbiAgLy8gd29ya0luUHJvZ3Jlc3NIb29rID0gbnVsbDtcblxufVxuZnVuY3Rpb24gZmluaXNoSG9va3MoQ29tcG9uZW50LCBwcm9wcywgY2hpbGRyZW4sIHJlZk9yQ29udGV4dCkge1xuICAvLyBUaGlzIG11c3QgYmUgY2FsbGVkIGFmdGVyIGV2ZXJ5IGZ1bmN0aW9uIGNvbXBvbmVudCB0byBwcmV2ZW50IGhvb2tzIGZyb21cbiAgLy8gYmVpbmcgdXNlZCBpbiBjbGFzc2VzLlxuICB3aGlsZSAoZGlkU2NoZWR1bGVSZW5kZXJQaGFzZVVwZGF0ZSkge1xuICAgIC8vIFVwZGF0ZXMgd2VyZSBzY2hlZHVsZWQgZHVyaW5nIHRoZSByZW5kZXIgcGhhc2UuIFRoZXkgYXJlIHN0b3JlZCBpblxuICAgIC8vIHRoZSBgcmVuZGVyUGhhc2VVcGRhdGVzYCBtYXAuIENhbGwgdGhlIGNvbXBvbmVudCBhZ2FpbiwgcmV1c2luZyB0aGVcbiAgICAvLyB3b3JrLWluLXByb2dyZXNzIGhvb2tzIGFuZCBhcHBseWluZyB0aGUgYWRkaXRpb25hbCB1cGRhdGVzIG9uIHRvcC4gS2VlcFxuICAgIC8vIHJlc3RhcnRpbmcgdW50aWwgbm8gbW9yZSB1cGRhdGVzIGFyZSBzY2hlZHVsZWQuXG4gICAgZGlkU2NoZWR1bGVSZW5kZXJQaGFzZVVwZGF0ZSA9IGZhbHNlO1xuICAgIG51bWJlck9mUmVSZW5kZXJzICs9IDE7IC8vIFN0YXJ0IG92ZXIgZnJvbSB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaXN0XG5cbiAgICB3b3JrSW5Qcm9ncmVzc0hvb2sgPSBudWxsO1xuICAgIGNoaWxkcmVuID0gQ29tcG9uZW50KHByb3BzLCByZWZPckNvbnRleHQpO1xuICB9XG5cbiAgY3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50ID0gbnVsbDtcbiAgZmlyc3RXb3JrSW5Qcm9ncmVzc0hvb2sgPSBudWxsO1xuICBudW1iZXJPZlJlUmVuZGVycyA9IDA7XG4gIHJlbmRlclBoYXNlVXBkYXRlcyA9IG51bGw7XG4gIHdvcmtJblByb2dyZXNzSG9vayA9IG51bGw7XG5cbiAge1xuICAgIGlzSW5Ib29rVXNlckNvZGVJbkRldiA9IGZhbHNlO1xuICB9IC8vIFRoZXNlIHdlcmUgcmVzZXQgYWJvdmVcbiAgLy8gY3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50ID0gbnVsbDtcbiAgLy8gZGlkU2NoZWR1bGVSZW5kZXJQaGFzZVVwZGF0ZSA9IGZhbHNlO1xuICAvLyBmaXJzdFdvcmtJblByb2dyZXNzSG9vayA9IG51bGw7XG4gIC8vIG51bWJlck9mUmVSZW5kZXJzID0gMDtcbiAgLy8gcmVuZGVyUGhhc2VVcGRhdGVzID0gbnVsbDtcbiAgLy8gd29ya0luUHJvZ3Jlc3NIb29rID0gbnVsbDtcblxuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gcmVhZENvbnRleHQoY29udGV4dCwgb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciB0aHJlYWRJRCA9IGN1cnJlbnRUaHJlYWRJRDtcbiAgdmFsaWRhdGVDb250ZXh0Qm91bmRzKGNvbnRleHQsIHRocmVhZElEKTtcblxuICB7XG4gICAgISFpc0luSG9va1VzZXJDb2RlSW5EZXYgPyB3YXJuaW5nJDEoZmFsc2UsICdDb250ZXh0IGNhbiBvbmx5IGJlIHJlYWQgd2hpbGUgUmVhY3QgaXMgcmVuZGVyaW5nLiAnICsgJ0luIGNsYXNzZXMsIHlvdSBjYW4gcmVhZCBpdCBpbiB0aGUgcmVuZGVyIG1ldGhvZCBvciBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMuICcgKyAnSW4gZnVuY3Rpb24gY29tcG9uZW50cywgeW91IGNhbiByZWFkIGl0IGRpcmVjdGx5IGluIHRoZSBmdW5jdGlvbiBib2R5LCBidXQgbm90ICcgKyAnaW5zaWRlIEhvb2tzIGxpa2UgdXNlUmVkdWNlcigpIG9yIHVzZU1lbW8oKS4nKSA6IHZvaWQgMDtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0W3RocmVhZElEXTtcbn1cblxuZnVuY3Rpb24gdXNlQ29udGV4dChjb250ZXh0LCBvYnNlcnZlZEJpdHMpIHtcbiAge1xuICAgIGN1cnJlbnRIb29rTmFtZUluRGV2ID0gJ3VzZUNvbnRleHQnO1xuICB9XG5cbiAgcmVzb2x2ZUN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCgpO1xuICB2YXIgdGhyZWFkSUQgPSBjdXJyZW50VGhyZWFkSUQ7XG4gIHZhbGlkYXRlQ29udGV4dEJvdW5kcyhjb250ZXh0LCB0aHJlYWRJRCk7XG4gIHJldHVybiBjb250ZXh0W3RocmVhZElEXTtcbn1cblxuZnVuY3Rpb24gYmFzaWNTdGF0ZVJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICByZXR1cm4gdHlwZW9mIGFjdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IGFjdGlvbihzdGF0ZSkgOiBhY3Rpb247XG59XG5cbmZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICB7XG4gICAgY3VycmVudEhvb2tOYW1lSW5EZXYgPSAndXNlU3RhdGUnO1xuICB9XG5cbiAgcmV0dXJuIHVzZVJlZHVjZXIoYmFzaWNTdGF0ZVJlZHVjZXIsIC8vIHVzZVJlZHVjZXIgaGFzIGEgc3BlY2lhbCBjYXNlIHRvIHN1cHBvcnQgbGF6eSB1c2VTdGF0ZSBpbml0aWFsaXplcnNcbiAgaW5pdGlhbFN0YXRlKTtcbn1cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICB7XG4gICAgaWYgKHJlZHVjZXIgIT09IGJhc2ljU3RhdGVSZWR1Y2VyKSB7XG4gICAgICBjdXJyZW50SG9va05hbWVJbkRldiA9ICd1c2VSZWR1Y2VyJztcbiAgICB9XG4gIH1cblxuICBjdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQgPSByZXNvbHZlQ3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50KCk7XG4gIHdvcmtJblByb2dyZXNzSG9vayA9IGNyZWF0ZVdvcmtJblByb2dyZXNzSG9vaygpO1xuXG4gIGlmIChpc1JlUmVuZGVyKSB7XG4gICAgLy8gVGhpcyBpcyBhIHJlLXJlbmRlci4gQXBwbHkgdGhlIG5ldyByZW5kZXIgcGhhc2UgdXBkYXRlcyB0byB0aGUgcHJldmlvdXNcbiAgICAvLyBjdXJyZW50IGhvb2suXG4gICAgdmFyIHF1ZXVlID0gd29ya0luUHJvZ3Jlc3NIb29rLnF1ZXVlO1xuICAgIHZhciBkaXNwYXRjaCA9IHF1ZXVlLmRpc3BhdGNoO1xuXG4gICAgaWYgKHJlbmRlclBoYXNlVXBkYXRlcyAhPT0gbnVsbCkge1xuICAgICAgLy8gUmVuZGVyIHBoYXNlIHVwZGF0ZXMgYXJlIHN0b3JlZCBpbiBhIG1hcCBvZiBxdWV1ZSAtPiBsaW5rZWQgbGlzdFxuICAgICAgdmFyIGZpcnN0UmVuZGVyUGhhc2VVcGRhdGUgPSByZW5kZXJQaGFzZVVwZGF0ZXMuZ2V0KHF1ZXVlKTtcblxuICAgICAgaWYgKGZpcnN0UmVuZGVyUGhhc2VVcGRhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZW5kZXJQaGFzZVVwZGF0ZXMuZGVsZXRlKHF1ZXVlKTtcbiAgICAgICAgdmFyIG5ld1N0YXRlID0gd29ya0luUHJvZ3Jlc3NIb29rLm1lbW9pemVkU3RhdGU7XG4gICAgICAgIHZhciB1cGRhdGUgPSBmaXJzdFJlbmRlclBoYXNlVXBkYXRlO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAvLyBQcm9jZXNzIHRoaXMgcmVuZGVyIHBoYXNlIHVwZGF0ZS4gV2UgZG9uJ3QgaGF2ZSB0byBjaGVjayB0aGVcbiAgICAgICAgICAvLyBwcmlvcml0eSBiZWNhdXNlIGl0IHdpbGwgYWx3YXlzIGJlIHRoZSBzYW1lIGFzIHRoZSBjdXJyZW50XG4gICAgICAgICAgLy8gcmVuZGVyJ3MuXG4gICAgICAgICAgdmFyIGFjdGlvbiA9IHVwZGF0ZS5hY3Rpb247XG5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBpc0luSG9va1VzZXJDb2RlSW5EZXYgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG5ld1N0YXRlID0gcmVkdWNlcihuZXdTdGF0ZSwgYWN0aW9uKTtcblxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlzSW5Ib29rVXNlckNvZGVJbkRldiA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVwZGF0ZSA9IHVwZGF0ZS5uZXh0O1xuICAgICAgICB9IHdoaWxlICh1cGRhdGUgIT09IG51bGwpO1xuXG4gICAgICAgIHdvcmtJblByb2dyZXNzSG9vay5tZW1vaXplZFN0YXRlID0gbmV3U3RhdGU7XG4gICAgICAgIHJldHVybiBbbmV3U3RhdGUsIGRpc3BhdGNoXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW3dvcmtJblByb2dyZXNzSG9vay5tZW1vaXplZFN0YXRlLCBkaXNwYXRjaF07XG4gIH0gZWxzZSB7XG4gICAge1xuICAgICAgaXNJbkhvb2tVc2VyQ29kZUluRGV2ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgaW5pdGlhbFN0YXRlO1xuXG4gICAgaWYgKHJlZHVjZXIgPT09IGJhc2ljU3RhdGVSZWR1Y2VyKSB7XG4gICAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIGB1c2VTdGF0ZWAuXG4gICAgICBpbml0aWFsU3RhdGUgPSB0eXBlb2YgaW5pdGlhbEFyZyA9PT0gJ2Z1bmN0aW9uJyA/IGluaXRpYWxBcmcoKSA6IGluaXRpYWxBcmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluaXRpYWxTdGF0ZSA9IGluaXQgIT09IHVuZGVmaW5lZCA/IGluaXQoaW5pdGlhbEFyZykgOiBpbml0aWFsQXJnO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGlzSW5Ib29rVXNlckNvZGVJbkRldiA9IGZhbHNlO1xuICAgIH1cblxuICAgIHdvcmtJblByb2dyZXNzSG9vay5tZW1vaXplZFN0YXRlID0gaW5pdGlhbFN0YXRlO1xuXG4gICAgdmFyIF9xdWV1ZSA9IHdvcmtJblByb2dyZXNzSG9vay5xdWV1ZSA9IHtcbiAgICAgIGxhc3Q6IG51bGwsXG4gICAgICBkaXNwYXRjaDogbnVsbFxuICAgIH07XG5cbiAgICB2YXIgX2Rpc3BhdGNoID0gX3F1ZXVlLmRpc3BhdGNoID0gZGlzcGF0Y2hBY3Rpb24uYmluZChudWxsLCBjdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQsIF9xdWV1ZSk7XG5cbiAgICByZXR1cm4gW3dvcmtJblByb2dyZXNzSG9vay5tZW1vaXplZFN0YXRlLCBfZGlzcGF0Y2hdO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVzZU1lbW8obmV4dENyZWF0ZSwgZGVwcykge1xuICBjdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQgPSByZXNvbHZlQ3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50KCk7XG4gIHdvcmtJblByb2dyZXNzSG9vayA9IGNyZWF0ZVdvcmtJblByb2dyZXNzSG9vaygpO1xuICB2YXIgbmV4dERlcHMgPSBkZXBzID09PSB1bmRlZmluZWQgPyBudWxsIDogZGVwcztcblxuICBpZiAod29ya0luUHJvZ3Jlc3NIb29rICE9PSBudWxsKSB7XG4gICAgdmFyIHByZXZTdGF0ZSA9IHdvcmtJblByb2dyZXNzSG9vay5tZW1vaXplZFN0YXRlO1xuXG4gICAgaWYgKHByZXZTdGF0ZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKG5leHREZXBzICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBwcmV2RGVwcyA9IHByZXZTdGF0ZVsxXTtcblxuICAgICAgICBpZiAoYXJlSG9va0lucHV0c0VxdWFsKG5leHREZXBzLCBwcmV2RGVwcykpIHtcbiAgICAgICAgICByZXR1cm4gcHJldlN0YXRlWzBdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAge1xuICAgIGlzSW5Ib29rVXNlckNvZGVJbkRldiA9IHRydWU7XG4gIH1cblxuICB2YXIgbmV4dFZhbHVlID0gbmV4dENyZWF0ZSgpO1xuXG4gIHtcbiAgICBpc0luSG9va1VzZXJDb2RlSW5EZXYgPSBmYWxzZTtcbiAgfVxuXG4gIHdvcmtJblByb2dyZXNzSG9vay5tZW1vaXplZFN0YXRlID0gW25leHRWYWx1ZSwgbmV4dERlcHNdO1xuICByZXR1cm4gbmV4dFZhbHVlO1xufVxuXG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIGN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCA9IHJlc29sdmVDdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQoKTtcbiAgd29ya0luUHJvZ3Jlc3NIb29rID0gY3JlYXRlV29ya0luUHJvZ3Jlc3NIb29rKCk7XG4gIHZhciBwcmV2aW91c1JlZiA9IHdvcmtJblByb2dyZXNzSG9vay5tZW1vaXplZFN0YXRlO1xuXG4gIGlmIChwcmV2aW91c1JlZiA9PT0gbnVsbCkge1xuICAgIHZhciByZWYgPSB7XG4gICAgICBjdXJyZW50OiBpbml0aWFsVmFsdWVcbiAgICB9O1xuXG4gICAge1xuICAgICAgT2JqZWN0LnNlYWwocmVmKTtcbiAgICB9XG5cbiAgICB3b3JrSW5Qcm9ncmVzc0hvb2subWVtb2l6ZWRTdGF0ZSA9IHJlZjtcbiAgICByZXR1cm4gcmVmO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBwcmV2aW91c1JlZjtcbiAgfVxufVxuXG5mdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBpbnB1dHMpIHtcbiAge1xuICAgIGN1cnJlbnRIb29rTmFtZUluRGV2ID0gJ3VzZUxheW91dEVmZmVjdCc7XG4gIH1cblxuICB3YXJuaW5nJDEoZmFsc2UsICd1c2VMYXlvdXRFZmZlY3QgZG9lcyBub3RoaW5nIG9uIHRoZSBzZXJ2ZXIsIGJlY2F1c2UgaXRzIGVmZmVjdCBjYW5ub3QgJyArIFwiYmUgZW5jb2RlZCBpbnRvIHRoZSBzZXJ2ZXIgcmVuZGVyZXIncyBvdXRwdXQgZm9ybWF0LiBUaGlzIHdpbGwgbGVhZCBcIiArICd0byBhIG1pc21hdGNoIGJldHdlZW4gdGhlIGluaXRpYWwsIG5vbi1oeWRyYXRlZCBVSSBhbmQgdGhlIGludGVuZGVkICcgKyAnVUkuIFRvIGF2b2lkIHRoaXMsIHVzZUxheW91dEVmZmVjdCBzaG91bGQgb25seSBiZSB1c2VkIGluICcgKyAnY29tcG9uZW50cyB0aGF0IHJlbmRlciBleGNsdXNpdmVseSBvbiB0aGUgY2xpZW50LiAnICsgJ1NlZSBodHRwczovL2ZiLm1lL3JlYWN0LXVzZWxheW91dGVmZmVjdC1zc3IgZm9yIGNvbW1vbiBmaXhlcy4nKTtcbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hBY3Rpb24oY29tcG9uZW50SWRlbnRpdHksIHF1ZXVlLCBhY3Rpb24pIHtcbiAgaWYgKCEobnVtYmVyT2ZSZVJlbmRlcnMgPCBSRV9SRU5ERVJfTElNSVQpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoXCJUb28gbWFueSByZS1yZW5kZXJzLiBSZWFjdCBsaW1pdHMgdGhlIG51bWJlciBvZiByZW5kZXJzIHRvIHByZXZlbnQgYW4gaW5maW5pdGUgbG9vcC5cIik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbXBvbmVudElkZW50aXR5ID09PSBjdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQpIHtcbiAgICAvLyBUaGlzIGlzIGEgcmVuZGVyIHBoYXNlIHVwZGF0ZS4gU3Rhc2ggaXQgaW4gYSBsYXppbHktY3JlYXRlZCBtYXAgb2ZcbiAgICAvLyBxdWV1ZSAtPiBsaW5rZWQgbGlzdCBvZiB1cGRhdGVzLiBBZnRlciB0aGlzIHJlbmRlciBwYXNzLCB3ZSdsbCByZXN0YXJ0XG4gICAgLy8gYW5kIGFwcGx5IHRoZSBzdGFzaGVkIHVwZGF0ZXMgb24gdG9wIG9mIHRoZSB3b3JrLWluLXByb2dyZXNzIGhvb2suXG4gICAgZGlkU2NoZWR1bGVSZW5kZXJQaGFzZVVwZGF0ZSA9IHRydWU7XG4gICAgdmFyIHVwZGF0ZSA9IHtcbiAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgbmV4dDogbnVsbFxuICAgIH07XG5cbiAgICBpZiAocmVuZGVyUGhhc2VVcGRhdGVzID09PSBudWxsKSB7XG4gICAgICByZW5kZXJQaGFzZVVwZGF0ZXMgPSBuZXcgTWFwKCk7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0UmVuZGVyUGhhc2VVcGRhdGUgPSByZW5kZXJQaGFzZVVwZGF0ZXMuZ2V0KHF1ZXVlKTtcblxuICAgIGlmIChmaXJzdFJlbmRlclBoYXNlVXBkYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlbmRlclBoYXNlVXBkYXRlcy5zZXQocXVldWUsIHVwZGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFwcGVuZCB0aGUgdXBkYXRlIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuXG4gICAgICB2YXIgbGFzdFJlbmRlclBoYXNlVXBkYXRlID0gZmlyc3RSZW5kZXJQaGFzZVVwZGF0ZTtcblxuICAgICAgd2hpbGUgKGxhc3RSZW5kZXJQaGFzZVVwZGF0ZS5uZXh0ICE9PSBudWxsKSB7XG4gICAgICAgIGxhc3RSZW5kZXJQaGFzZVVwZGF0ZSA9IGxhc3RSZW5kZXJQaGFzZVVwZGF0ZS5uZXh0O1xuICAgICAgfVxuXG4gICAgICBsYXN0UmVuZGVyUGhhc2VVcGRhdGUubmV4dCA9IHVwZGF0ZTtcbiAgICB9XG4gIH0gZWxzZSB7Ly8gVGhpcyBtZWFucyBhbiB1cGRhdGUgaGFzIGhhcHBlbmVkIGFmdGVyIHRoZSBmdW5jdGlvbiBjb21wb25lbnQgaGFzXG4gICAgLy8gcmV0dXJuZWQuIE9uIHRoZSBzZXJ2ZXIgdGhpcyBpcyBhIG5vLW9wLiBJbiBSZWFjdCBGaWJlciwgdGhlIHVwZGF0ZVxuICAgIC8vIHdvdWxkIGJlIHNjaGVkdWxlZCBmb3IgYSBmdXR1cmUgcmVuZGVyLlxuICB9XG59XG5cbmZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKSB7XG4gIC8vIENhbGxiYWNrcyBhcmUgcGFzc2VkIGFzIHRoZXkgYXJlIGluIHRoZSBzZXJ2ZXIgZW52aXJvbm1lbnQuXG4gIHJldHVybiBjYWxsYmFjaztcbn1cblxuZnVuY3Rpb24gdXNlUmVzcG9uZGVyKHJlc3BvbmRlciwgcHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogcHJvcHMsXG4gICAgcmVzcG9uZGVyOiByZXNwb25kZXJcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlRGVmZXJyZWRWYWx1ZSh2YWx1ZSwgY29uZmlnKSB7XG4gIHJlc29sdmVDdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQoKTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiB1c2VUcmFuc2l0aW9uKGNvbmZpZykge1xuICByZXNvbHZlQ3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50KCk7XG5cbiAgdmFyIHN0YXJ0VHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKCk7XG4gIH07XG5cbiAgcmV0dXJuIFtzdGFydFRyYW5zaXRpb24sIGZhbHNlXTtcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnZhciBjdXJyZW50VGhyZWFkSUQgPSAwO1xuZnVuY3Rpb24gc2V0Q3VycmVudFRocmVhZElEKHRocmVhZElEKSB7XG4gIGN1cnJlbnRUaHJlYWRJRCA9IHRocmVhZElEO1xufVxudmFyIERpc3BhdGNoZXIgPSB7XG4gIHJlYWRDb250ZXh0OiByZWFkQ29udGV4dCxcbiAgdXNlQ29udGV4dDogdXNlQ29udGV4dCxcbiAgdXNlTWVtbzogdXNlTWVtbyxcbiAgdXNlUmVkdWNlcjogdXNlUmVkdWNlcixcbiAgdXNlUmVmOiB1c2VSZWYsXG4gIHVzZVN0YXRlOiB1c2VTdGF0ZSxcbiAgdXNlTGF5b3V0RWZmZWN0OiB1c2VMYXlvdXRFZmZlY3QsXG4gIHVzZUNhbGxiYWNrOiB1c2VDYWxsYmFjayxcbiAgLy8gdXNlSW1wZXJhdGl2ZUhhbmRsZSBpcyBub3QgcnVuIGluIHRoZSBzZXJ2ZXIgZW52aXJvbm1lbnRcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZTogbm9vcCxcbiAgLy8gRWZmZWN0cyBhcmUgbm90IHJ1biBpbiB0aGUgc2VydmVyIGVudmlyb25tZW50LlxuICB1c2VFZmZlY3Q6IG5vb3AsXG4gIC8vIERlYnVnZ2luZyBlZmZlY3RcbiAgdXNlRGVidWdWYWx1ZTogbm9vcCxcbiAgdXNlUmVzcG9uZGVyOiB1c2VSZXNwb25kZXIsXG4gIHVzZURlZmVycmVkVmFsdWU6IHVzZURlZmVycmVkVmFsdWUsXG4gIHVzZVRyYW5zaXRpb246IHVzZVRyYW5zaXRpb25cbn07XG5cbnZhciBIVE1MX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcbnZhciBNQVRIX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MJztcbnZhciBTVkdfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbnZhciBOYW1lc3BhY2VzID0ge1xuICBodG1sOiBIVE1MX05BTUVTUEFDRSxcbiAgbWF0aG1sOiBNQVRIX05BTUVTUEFDRSxcbiAgc3ZnOiBTVkdfTkFNRVNQQUNFXG59OyAvLyBBc3N1bWVzIHRoZXJlIGlzIG5vIHBhcmVudCBuYW1lc3BhY2UuXG5cbmZ1bmN0aW9uIGdldEludHJpbnNpY05hbWVzcGFjZSh0eXBlKSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3N2Zyc6XG4gICAgICByZXR1cm4gU1ZHX05BTUVTUEFDRTtcblxuICAgIGNhc2UgJ21hdGgnOlxuICAgICAgcmV0dXJuIE1BVEhfTkFNRVNQQUNFO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBIVE1MX05BTUVTUEFDRTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0Q2hpbGROYW1lc3BhY2UocGFyZW50TmFtZXNwYWNlLCB0eXBlKSB7XG4gIGlmIChwYXJlbnROYW1lc3BhY2UgPT0gbnVsbCB8fCBwYXJlbnROYW1lc3BhY2UgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgLy8gTm8gKG9yIGRlZmF1bHQpIHBhcmVudCBuYW1lc3BhY2U6IHBvdGVudGlhbCBlbnRyeSBwb2ludC5cbiAgICByZXR1cm4gZ2V0SW50cmluc2ljTmFtZXNwYWNlKHR5cGUpO1xuICB9XG5cbiAgaWYgKHBhcmVudE5hbWVzcGFjZSA9PT0gU1ZHX05BTUVTUEFDRSAmJiB0eXBlID09PSAnZm9yZWlnbk9iamVjdCcpIHtcbiAgICAvLyBXZSdyZSBsZWF2aW5nIFNWRy5cbiAgICByZXR1cm4gSFRNTF9OQU1FU1BBQ0U7XG4gIH0gLy8gQnkgZGVmYXVsdCwgcGFzcyBuYW1lc3BhY2UgYmVsb3cuXG5cblxuICByZXR1cm4gcGFyZW50TmFtZXNwYWNlO1xufVxuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQzID0gbnVsbDtcbnZhciBSZWFjdENvbnRyb2xsZWRWYWx1ZVByb3BUeXBlcyA9IHtcbiAgY2hlY2tQcm9wVHlwZXM6IG51bGxcbn07XG5cbntcbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQzID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgdmFyIGhhc1JlYWRPbmx5VmFsdWUgPSB7XG4gICAgYnV0dG9uOiB0cnVlLFxuICAgIGNoZWNrYm94OiB0cnVlLFxuICAgIGltYWdlOiB0cnVlLFxuICAgIGhpZGRlbjogdHJ1ZSxcbiAgICByYWRpbzogdHJ1ZSxcbiAgICByZXNldDogdHJ1ZSxcbiAgICBzdWJtaXQ6IHRydWVcbiAgfTtcbiAgdmFyIHByb3BUeXBlcyA9IHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgICAgaWYgKGhhc1JlYWRPbmx5VmFsdWVbcHJvcHMudHlwZV0gfHwgcHJvcHMub25DaGFuZ2UgfHwgcHJvcHMucmVhZE9ubHkgfHwgcHJvcHMuZGlzYWJsZWQgfHwgcHJvcHNbcHJvcE5hbWVdID09IG51bGwgfHwgZW5hYmxlRmxhcmVBUEkgJiYgcHJvcHMubGlzdGVuZXJzKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdZb3UgcHJvdmlkZWQgYSBgdmFsdWVgIHByb3AgdG8gYSBmb3JtIGZpZWxkIHdpdGhvdXQgYW4gJyArICdgb25DaGFuZ2VgIGhhbmRsZXIuIFRoaXMgd2lsbCByZW5kZXIgYSByZWFkLW9ubHkgZmllbGQuIElmICcgKyAndGhlIGZpZWxkIHNob3VsZCBiZSBtdXRhYmxlIHVzZSBgZGVmYXVsdFZhbHVlYC4gT3RoZXJ3aXNlLCAnICsgJ3NldCBlaXRoZXIgYG9uQ2hhbmdlYCBvciBgcmVhZE9ubHlgLicpO1xuICAgIH0sXG4gICAgY2hlY2tlZDogZnVuY3Rpb24gKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgICAgaWYgKHByb3BzLm9uQ2hhbmdlIHx8IHByb3BzLnJlYWRPbmx5IHx8IHByb3BzLmRpc2FibGVkIHx8IHByb3BzW3Byb3BOYW1lXSA9PSBudWxsIHx8IGVuYWJsZUZsYXJlQVBJICYmIHByb3BzLmxpc3RlbmVycykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBFcnJvcignWW91IHByb3ZpZGVkIGEgYGNoZWNrZWRgIHByb3AgdG8gYSBmb3JtIGZpZWxkIHdpdGhvdXQgYW4gJyArICdgb25DaGFuZ2VgIGhhbmRsZXIuIFRoaXMgd2lsbCByZW5kZXIgYSByZWFkLW9ubHkgZmllbGQuIElmICcgKyAndGhlIGZpZWxkIHNob3VsZCBiZSBtdXRhYmxlIHVzZSBgZGVmYXVsdENoZWNrZWRgLiBPdGhlcndpc2UsICcgKyAnc2V0IGVpdGhlciBgb25DaGFuZ2VgIG9yIGByZWFkT25seWAuJyk7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogUHJvdmlkZSBhIGxpbmtlZCBgdmFsdWVgIGF0dHJpYnV0ZSBmb3IgY29udHJvbGxlZCBmb3Jtcy4gWW91IHNob3VsZCBub3QgdXNlXG4gICAqIHRoaXMgb3V0c2lkZSBvZiB0aGUgUmVhY3RET00gY29udHJvbGxlZCBmb3JtIGNvbXBvbmVudHMuXG4gICAqL1xuXG4gIFJlYWN0Q29udHJvbGxlZFZhbHVlUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gZnVuY3Rpb24gKHRhZ05hbWUsIHByb3BzKSB7XG4gICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBwcm9wcywgJ3Byb3AnLCB0YWdOYW1lLCBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDMuZ2V0U3RhY2tBZGRlbmR1bSk7XG4gIH07XG59XG5cbi8vIEZvciBIVE1MLCBjZXJ0YWluIHRhZ3Mgc2hvdWxkIG9taXQgdGhlaXIgY2xvc2UgdGFnLiBXZSBrZWVwIGEgd2hpdGVsaXN0IGZvclxuLy8gdGhvc2Ugc3BlY2lhbC1jYXNlIHRhZ3MuXG52YXIgb21pdHRlZENsb3NlVGFncyA9IHtcbiAgYXJlYTogdHJ1ZSxcbiAgYmFzZTogdHJ1ZSxcbiAgYnI6IHRydWUsXG4gIGNvbDogdHJ1ZSxcbiAgZW1iZWQ6IHRydWUsXG4gIGhyOiB0cnVlLFxuICBpbWc6IHRydWUsXG4gIGlucHV0OiB0cnVlLFxuICBrZXlnZW46IHRydWUsXG4gIGxpbms6IHRydWUsXG4gIG1ldGE6IHRydWUsXG4gIHBhcmFtOiB0cnVlLFxuICBzb3VyY2U6IHRydWUsXG4gIHRyYWNrOiB0cnVlLFxuICB3YnI6IHRydWUgLy8gTk9URTogbWVudWl0ZW0ncyBjbG9zZSB0YWcgc2hvdWxkIGJlIG9taXR0ZWQsIGJ1dCB0aGF0IGNhdXNlcyBwcm9ibGVtcy5cblxufTtcblxuLy8gYG9taXR0ZWRDbG9zZVRhZ3NgIGV4Y2VwdCB0aGF0IGBtZW51aXRlbWAgc2hvdWxkIHN0aWxsIGhhdmUgaXRzIGNsb3NpbmcgdGFnLlxuXG52YXIgdm9pZEVsZW1lbnRUYWdzID0gX2Fzc2lnbih7XG4gIG1lbnVpdGVtOiB0cnVlXG59LCBvbWl0dGVkQ2xvc2VUYWdzKTtcblxuLy8gb3IgYWRkIHN0YWNrIGJ5IGRlZmF1bHQgdG8gaW52YXJpYW50cyB3aGVyZSBwb3NzaWJsZS5cblxudmFyIEhUTUwgPSAnX19odG1sJztcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDQgPSBudWxsO1xuXG57XG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkNCA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG59XG5cbmZ1bmN0aW9uIGFzc2VydFZhbGlkUHJvcHModGFnLCBwcm9wcykge1xuICBpZiAoIXByb3BzKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIE5vdGUgdGhlIHVzZSBvZiBgPT1gIHdoaWNoIGNoZWNrcyBmb3IgbnVsbCBvciB1bmRlZmluZWQuXG5cblxuICBpZiAodm9pZEVsZW1lbnRUYWdzW3RhZ10pIHtcbiAgICBpZiAoIShwcm9wcy5jaGlsZHJlbiA9PSBudWxsICYmIHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MID09IG51bGwpKSB7XG4gICAgICB7XG4gICAgICAgIHRocm93IEVycm9yKHRhZyArIFwiIGlzIGEgdm9pZCBlbGVtZW50IHRhZyBhbmQgbXVzdCBuZWl0aGVyIGhhdmUgYGNoaWxkcmVuYCBub3IgdXNlIGBkYW5nZXJvdXNseVNldElubmVySFRNTGAuXCIgKyAoUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQ0LmdldFN0YWNrQWRkZW5kdW0oKSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCAhPSBudWxsKSB7XG4gICAgaWYgKCEocHJvcHMuY2hpbGRyZW4gPT0gbnVsbCkpIHtcbiAgICAgIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJDYW4gb25seSBzZXQgb25lIG9mIGBjaGlsZHJlbmAgb3IgYHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MYC5cIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEodHlwZW9mIHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MID09PSAnb2JqZWN0JyAmJiBIVE1MIGluIHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKSkge1xuICAgICAge1xuICAgICAgICB0aHJvdyBFcnJvcihcImBwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTGAgbXVzdCBiZSBpbiB0aGUgZm9ybSBge19faHRtbDogLi4ufWAuIFBsZWFzZSB2aXNpdCBodHRwczovL2ZiLm1lL3JlYWN0LWludmFyaWFudC1kYW5nZXJvdXNseS1zZXQtaW5uZXItaHRtbCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAge1xuICAgICEocHJvcHMuc3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIHx8ICFwcm9wcy5jb250ZW50RWRpdGFibGUgfHwgcHJvcHMuY2hpbGRyZW4gPT0gbnVsbCkgPyB3YXJuaW5nJDEoZmFsc2UsICdBIGNvbXBvbmVudCBpcyBgY29udGVudEVkaXRhYmxlYCBhbmQgY29udGFpbnMgYGNoaWxkcmVuYCBtYW5hZ2VkIGJ5ICcgKyAnUmVhY3QuIEl0IGlzIG5vdyB5b3VyIHJlc3BvbnNpYmlsaXR5IHRvIGd1YXJhbnRlZSB0aGF0IG5vbmUgb2YgJyArICd0aG9zZSBub2RlcyBhcmUgdW5leHBlY3RlZGx5IG1vZGlmaWVkIG9yIGR1cGxpY2F0ZWQuIFRoaXMgaXMgJyArICdwcm9iYWJseSBub3QgaW50ZW50aW9uYWwuJykgOiB2b2lkIDA7XG4gIH1cblxuICBpZiAoIShwcm9wcy5zdHlsZSA9PSBudWxsIHx8IHR5cGVvZiBwcm9wcy5zdHlsZSA9PT0gJ29iamVjdCcpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoXCJUaGUgYHN0eWxlYCBwcm9wIGV4cGVjdHMgYSBtYXBwaW5nIGZyb20gc3R5bGUgcHJvcGVydGllcyB0byB2YWx1ZXMsIG5vdCBhIHN0cmluZy4gRm9yIGV4YW1wbGUsIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IHNwYWNpbmcgKyAnZW0nfX0gd2hlbiB1c2luZyBKU1guXCIgKyAoUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQ0LmdldFN0YWNrQWRkZW5kdW0oKSkpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENTUyBwcm9wZXJ0aWVzIHdoaWNoIGFjY2VwdCBudW1iZXJzIGJ1dCBhcmUgbm90IGluIHVuaXRzIG9mIFwicHhcIi5cbiAqL1xudmFyIGlzVW5pdGxlc3NOdW1iZXIgPSB7XG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiB0cnVlLFxuICBib3JkZXJJbWFnZU91dHNldDogdHJ1ZSxcbiAgYm9yZGVySW1hZ2VTbGljZTogdHJ1ZSxcbiAgYm9yZGVySW1hZ2VXaWR0aDogdHJ1ZSxcbiAgYm94RmxleDogdHJ1ZSxcbiAgYm94RmxleEdyb3VwOiB0cnVlLFxuICBib3hPcmRpbmFsR3JvdXA6IHRydWUsXG4gIGNvbHVtbkNvdW50OiB0cnVlLFxuICBjb2x1bW5zOiB0cnVlLFxuICBmbGV4OiB0cnVlLFxuICBmbGV4R3JvdzogdHJ1ZSxcbiAgZmxleFBvc2l0aXZlOiB0cnVlLFxuICBmbGV4U2hyaW5rOiB0cnVlLFxuICBmbGV4TmVnYXRpdmU6IHRydWUsXG4gIGZsZXhPcmRlcjogdHJ1ZSxcbiAgZ3JpZEFyZWE6IHRydWUsXG4gIGdyaWRSb3c6IHRydWUsXG4gIGdyaWRSb3dFbmQ6IHRydWUsXG4gIGdyaWRSb3dTcGFuOiB0cnVlLFxuICBncmlkUm93U3RhcnQ6IHRydWUsXG4gIGdyaWRDb2x1bW46IHRydWUsXG4gIGdyaWRDb2x1bW5FbmQ6IHRydWUsXG4gIGdyaWRDb2x1bW5TcGFuOiB0cnVlLFxuICBncmlkQ29sdW1uU3RhcnQ6IHRydWUsXG4gIGZvbnRXZWlnaHQ6IHRydWUsXG4gIGxpbmVDbGFtcDogdHJ1ZSxcbiAgbGluZUhlaWdodDogdHJ1ZSxcbiAgb3BhY2l0eTogdHJ1ZSxcbiAgb3JkZXI6IHRydWUsXG4gIG9ycGhhbnM6IHRydWUsXG4gIHRhYlNpemU6IHRydWUsXG4gIHdpZG93czogdHJ1ZSxcbiAgekluZGV4OiB0cnVlLFxuICB6b29tOiB0cnVlLFxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiB0cnVlLFxuICBmbG9vZE9wYWNpdHk6IHRydWUsXG4gIHN0b3BPcGFjaXR5OiB0cnVlLFxuICBzdHJva2VEYXNoYXJyYXk6IHRydWUsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IHRydWUsXG4gIHN0cm9rZU1pdGVybGltaXQ6IHRydWUsXG4gIHN0cm9rZU9wYWNpdHk6IHRydWUsXG4gIHN0cm9rZVdpZHRoOiB0cnVlXG59O1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4IHZlbmRvci1zcGVjaWZpYyBwcmVmaXgsIGVnOiBXZWJraXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgc3R5bGUgbmFtZSwgZWc6IHRyYW5zaXRpb25EdXJhdGlvblxuICogQHJldHVybiB7c3RyaW5nfSBzdHlsZSBuYW1lIHByZWZpeGVkIHdpdGggYHByZWZpeGAsIHByb3Blcmx5IGNhbWVsQ2FzZWQsIGVnOlxuICogV2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uXG4gKi9cblxuZnVuY3Rpb24gcHJlZml4S2V5KHByZWZpeCwga2V5KSB7XG4gIHJldHVybiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc3Vic3RyaW5nKDEpO1xufVxuLyoqXG4gKiBTdXBwb3J0IHN0eWxlIG5hbWVzIHRoYXQgbWF5IGNvbWUgcGFzc2VkIGluIHByZWZpeGVkIGJ5IGFkZGluZyBwZXJtdXRhdGlvbnNcbiAqIG9mIHZlbmRvciBwcmVmaXhlcy5cbiAqL1xuXG5cbnZhciBwcmVmaXhlcyA9IFsnV2Via2l0JywgJ21zJywgJ01veicsICdPJ107IC8vIFVzaW5nIE9iamVjdC5rZXlzIGhlcmUsIG9yIGVsc2UgdGhlIHZhbmlsbGEgZm9yLWluIGxvb3AgbWFrZXMgSUU4IGdvIGludG8gYW5cbi8vIGluZmluaXRlIGxvb3AsIGJlY2F1c2UgaXQgaXRlcmF0ZXMgb3ZlciB0aGUgbmV3bHkgYWRkZWQgcHJvcHMgdG9vLlxuXG5PYmplY3Qua2V5cyhpc1VuaXRsZXNzTnVtYmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gIHByZWZpeGVzLmZvckVhY2goZnVuY3Rpb24gKHByZWZpeCkge1xuICAgIGlzVW5pdGxlc3NOdW1iZXJbcHJlZml4S2V5KHByZWZpeCwgcHJvcCldID0gaXNVbml0bGVzc051bWJlcltwcm9wXTtcbiAgfSk7XG59KTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgdmFsdWUgaW50byB0aGUgcHJvcGVyIGNzcyB3cml0YWJsZSB2YWx1ZS4gVGhlIHN0eWxlIG5hbWUgYG5hbWVgXG4gKiBzaG91bGQgYmUgbG9naWNhbCAobm8gaHlwaGVucyksIGFzIHNwZWNpZmllZFxuICogaW4gYENTU1Byb3BlcnR5LmlzVW5pdGxlc3NOdW1iZXJgLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIENTUyBwcm9wZXJ0eSBuYW1lIHN1Y2ggYXMgYHRvcE1hcmdpbmAuXG4gKiBAcGFyYW0geyp9IHZhbHVlIENTUyBwcm9wZXJ0eSB2YWx1ZSBzdWNoIGFzIGAxMHB4YC5cbiAqIEByZXR1cm4ge3N0cmluZ30gTm9ybWFsaXplZCBzdHlsZSB2YWx1ZSB3aXRoIGRpbWVuc2lvbnMgYXBwbGllZC5cbiAqL1xuXG5mdW5jdGlvbiBkYW5nZXJvdXNTdHlsZVZhbHVlKG5hbWUsIHZhbHVlLCBpc0N1c3RvbVByb3BlcnR5KSB7XG4gIC8vIE5vdGUgdGhhdCB3ZSd2ZSByZW1vdmVkIGVzY2FwZVRleHRGb3JCcm93c2VyKCkgY2FsbHMgaGVyZSBzaW5jZSB0aGVcbiAgLy8gd2hvbGUgc3RyaW5nIHdpbGwgYmUgZXNjYXBlZCB3aGVuIHRoZSBhdHRyaWJ1dGUgaXMgaW5qZWN0ZWQgaW50b1xuICAvLyB0aGUgbWFya3VwLiBJZiB5b3UgcHJvdmlkZSB1bnNhZmUgdXNlciBkYXRhIGhlcmUgdGhleSBjYW4gaW5qZWN0XG4gIC8vIGFyYml0cmFyeSBDU1Mgd2hpY2ggbWF5IGJlIHByb2JsZW1hdGljIChJIGNvdWxkbid0IHJlcHJvIHRoaXMpOlxuICAvLyBodHRwczovL3d3dy5vd2FzcC5vcmcvaW5kZXgucGhwL1hTU19GaWx0ZXJfRXZhc2lvbl9DaGVhdF9TaGVldFxuICAvLyBodHRwOi8vd3d3LnRoZXNwYW5uZXIuY28udWsvMjAwNy8xMS8yNi91bHRpbWF0ZS14c3MtY3NzLWluamVjdGlvbi9cbiAgLy8gVGhpcyBpcyBub3QgYW4gWFNTIGhvbGUgYnV0IGluc3RlYWQgYSBwb3RlbnRpYWwgQ1NTIGluamVjdGlvbiBpc3N1ZVxuICAvLyB3aGljaCBoYXMgbGVhZCB0byBhIGdyZWF0ZXIgZGlzY3Vzc2lvbiBhYm91dCBob3cgd2UncmUgZ29pbmcgdG9cbiAgLy8gdHJ1c3QgVVJMcyBtb3ZpbmcgZm9yd2FyZC4gU2VlICMyMTE1OTAxXG4gIHZhciBpc0VtcHR5ID0gdmFsdWUgPT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyB8fCB2YWx1ZSA9PT0gJyc7XG5cbiAgaWYgKGlzRW1wdHkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAoIWlzQ3VzdG9tUHJvcGVydHkgJiYgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSAhPT0gMCAmJiAhKGlzVW5pdGxlc3NOdW1iZXIuaGFzT3duUHJvcGVydHkobmFtZSkgJiYgaXNVbml0bGVzc051bWJlcltuYW1lXSkpIHtcbiAgICByZXR1cm4gdmFsdWUgKyAncHgnOyAvLyBQcmVzdW1lcyBpbXBsaWNpdCAncHgnIHN1ZmZpeCBmb3IgdW5pdGxlc3MgbnVtYmVyc1xuICB9XG5cbiAgcmV0dXJuICgnJyArIHZhbHVlKS50cmltKCk7XG59XG5cbnZhciB1cHBlcmNhc2VQYXR0ZXJuID0gLyhbQS1aXSkvZztcbnZhciBtc1BhdHRlcm4gPSAvXm1zLS87XG4vKipcbiAqIEh5cGhlbmF0ZXMgYSBjYW1lbGNhc2VkIENTUyBwcm9wZXJ0eSBuYW1lLCBmb3IgZXhhbXBsZTpcbiAqXG4gKiAgID4gaHlwaGVuYXRlU3R5bGVOYW1lKCdiYWNrZ3JvdW5kQ29sb3InKVxuICogICA8IFwiYmFja2dyb3VuZC1jb2xvclwiXG4gKiAgID4gaHlwaGVuYXRlU3R5bGVOYW1lKCdNb3pUcmFuc2l0aW9uJylcbiAqICAgPCBcIi1tb3otdHJhbnNpdGlvblwiXG4gKiAgID4gaHlwaGVuYXRlU3R5bGVOYW1lKCdtc1RyYW5zaXRpb24nKVxuICogICA8IFwiLW1zLXRyYW5zaXRpb25cIlxuICpcbiAqIEFzIE1vZGVybml6ciBzdWdnZXN0cyAoaHR0cDovL21vZGVybml6ci5jb20vZG9jcy8jcHJlZml4ZWQpLCBhbiBgbXNgIHByZWZpeFxuICogaXMgY29udmVydGVkIHRvIGAtbXMtYC5cbiAqL1xuXG5mdW5jdGlvbiBoeXBoZW5hdGVTdHlsZU5hbWUobmFtZSkge1xuICByZXR1cm4gbmFtZS5yZXBsYWNlKHVwcGVyY2FzZVBhdHRlcm4sICctJDEnKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UobXNQYXR0ZXJuLCAnLW1zLScpO1xufVxuXG5mdW5jdGlvbiBpc0N1c3RvbUNvbXBvbmVudCh0YWdOYW1lLCBwcm9wcykge1xuICBpZiAodGFnTmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBwcm9wcy5pcyA9PT0gJ3N0cmluZyc7XG4gIH1cblxuICBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICAvLyBUaGVzZSBhcmUgcmVzZXJ2ZWQgU1ZHIGFuZCBNYXRoTUwgZWxlbWVudHMuXG4gICAgLy8gV2UgZG9uJ3QgbWluZCB0aGlzIHdoaXRlbGlzdCB0b28gbXVjaCBiZWNhdXNlIHdlIGV4cGVjdCBpdCB0byBuZXZlciBncm93LlxuICAgIC8vIFRoZSBhbHRlcm5hdGl2ZSBpcyB0byB0cmFjayB0aGUgbmFtZXNwYWNlIGluIGEgZmV3IHBsYWNlcyB3aGljaCBpcyBjb252b2x1dGVkLlxuICAgIC8vIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby93ZWJjb21wb25lbnRzL3NwZWMvY3VzdG9tLyNjdXN0b20tZWxlbWVudHMtY29yZS1jb25jZXB0c1xuICAgIGNhc2UgJ2Fubm90YXRpb24teG1sJzpcbiAgICBjYXNlICdjb2xvci1wcm9maWxlJzpcbiAgICBjYXNlICdmb250LWZhY2UnOlxuICAgIGNhc2UgJ2ZvbnQtZmFjZS1zcmMnOlxuICAgIGNhc2UgJ2ZvbnQtZmFjZS11cmknOlxuICAgIGNhc2UgJ2ZvbnQtZmFjZS1mb3JtYXQnOlxuICAgIGNhc2UgJ2ZvbnQtZmFjZS1uYW1lJzpcbiAgICBjYXNlICdtaXNzaW5nLWdseXBoJzpcbiAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG52YXIgd2FyblZhbGlkU3R5bGUgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICAvLyAnbXNUcmFuc2Zvcm0nIGlzIGNvcnJlY3QsIGJ1dCB0aGUgb3RoZXIgcHJlZml4ZXMgc2hvdWxkIGJlIGNhcGl0YWxpemVkXG4gIHZhciBiYWRWZW5kb3JlZFN0eWxlTmFtZVBhdHRlcm4gPSAvXig/OndlYmtpdHxtb3p8bylbQS1aXS87XG4gIHZhciBtc1BhdHRlcm4kMSA9IC9eLW1zLS87XG4gIHZhciBoeXBoZW5QYXR0ZXJuID0gLy0oLikvZzsgLy8gc3R5bGUgdmFsdWVzIHNob3VsZG4ndCBjb250YWluIGEgc2VtaWNvbG9uXG5cbiAgdmFyIGJhZFN0eWxlVmFsdWVXaXRoU2VtaWNvbG9uUGF0dGVybiA9IC87XFxzKiQvO1xuICB2YXIgd2FybmVkU3R5bGVOYW1lcyA9IHt9O1xuICB2YXIgd2FybmVkU3R5bGVWYWx1ZXMgPSB7fTtcbiAgdmFyIHdhcm5lZEZvck5hTlZhbHVlID0gZmFsc2U7XG4gIHZhciB3YXJuZWRGb3JJbmZpbml0eVZhbHVlID0gZmFsc2U7XG5cbiAgdmFyIGNhbWVsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZShoeXBoZW5QYXR0ZXJuLCBmdW5jdGlvbiAoXywgY2hhcmFjdGVyKSB7XG4gICAgICByZXR1cm4gY2hhcmFjdGVyLnRvVXBwZXJDYXNlKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHdhcm5IeXBoZW5hdGVkU3R5bGVOYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAod2FybmVkU3R5bGVOYW1lcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiB3YXJuZWRTdHlsZU5hbWVzW25hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2FybmVkU3R5bGVOYW1lc1tuYW1lXSA9IHRydWU7XG4gICAgd2FybmluZyQxKGZhbHNlLCAnVW5zdXBwb3J0ZWQgc3R5bGUgcHJvcGVydHkgJXMuIERpZCB5b3UgbWVhbiAlcz8nLCBuYW1lLCAvLyBBcyBBbmRpIFNtaXRoIHN1Z2dlc3RzXG4gICAgLy8gKGh0dHA6Ly93d3cuYW5kaXNtaXRoLmNvbS9ibG9nLzIwMTIvMDIvbW9kZXJuaXpyLXByZWZpeGVkLyksIGFuIGAtbXNgIHByZWZpeFxuICAgIC8vIGlzIGNvbnZlcnRlZCB0byBsb3dlcmNhc2UgYG1zYC5cbiAgICBjYW1lbGl6ZShuYW1lLnJlcGxhY2UobXNQYXR0ZXJuJDEsICdtcy0nKSkpO1xuICB9O1xuXG4gIHZhciB3YXJuQmFkVmVuZG9yZWRTdHlsZU5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIGlmICh3YXJuZWRTdHlsZU5hbWVzLmhhc093blByb3BlcnR5KG5hbWUpICYmIHdhcm5lZFN0eWxlTmFtZXNbbmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3YXJuZWRTdHlsZU5hbWVzW25hbWVdID0gdHJ1ZTtcbiAgICB3YXJuaW5nJDEoZmFsc2UsICdVbnN1cHBvcnRlZCB2ZW5kb3ItcHJlZml4ZWQgc3R5bGUgcHJvcGVydHkgJXMuIERpZCB5b3UgbWVhbiAlcz8nLCBuYW1lLCBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKSk7XG4gIH07XG5cbiAgdmFyIHdhcm5TdHlsZVZhbHVlV2l0aFNlbWljb2xvbiA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgIGlmICh3YXJuZWRTdHlsZVZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh2YWx1ZSkgJiYgd2FybmVkU3R5bGVWYWx1ZXNbdmFsdWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2FybmVkU3R5bGVWYWx1ZXNbdmFsdWVdID0gdHJ1ZTtcbiAgICB3YXJuaW5nJDEoZmFsc2UsIFwiU3R5bGUgcHJvcGVydHkgdmFsdWVzIHNob3VsZG4ndCBjb250YWluIGEgc2VtaWNvbG9uLiBcIiArICdUcnkgXCIlczogJXNcIiBpbnN0ZWFkLicsIG5hbWUsIHZhbHVlLnJlcGxhY2UoYmFkU3R5bGVWYWx1ZVdpdGhTZW1pY29sb25QYXR0ZXJuLCAnJykpO1xuICB9O1xuXG4gIHZhciB3YXJuU3R5bGVWYWx1ZUlzTmFOID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHdhcm5lZEZvck5hTlZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2FybmVkRm9yTmFOVmFsdWUgPSB0cnVlO1xuICAgIHdhcm5pbmckMShmYWxzZSwgJ2BOYU5gIGlzIGFuIGludmFsaWQgdmFsdWUgZm9yIHRoZSBgJXNgIGNzcyBzdHlsZSBwcm9wZXJ0eS4nLCBuYW1lKTtcbiAgfTtcblxuICB2YXIgd2FyblN0eWxlVmFsdWVJc0luZmluaXR5ID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHdhcm5lZEZvckluZmluaXR5VmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3YXJuZWRGb3JJbmZpbml0eVZhbHVlID0gdHJ1ZTtcbiAgICB3YXJuaW5nJDEoZmFsc2UsICdgSW5maW5pdHlgIGlzIGFuIGludmFsaWQgdmFsdWUgZm9yIHRoZSBgJXNgIGNzcyBzdHlsZSBwcm9wZXJ0eS4nLCBuYW1lKTtcbiAgfTtcblxuICB3YXJuVmFsaWRTdHlsZSA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgIGlmIChuYW1lLmluZGV4T2YoJy0nKSA+IC0xKSB7XG4gICAgICB3YXJuSHlwaGVuYXRlZFN0eWxlTmFtZShuYW1lKTtcbiAgICB9IGVsc2UgaWYgKGJhZFZlbmRvcmVkU3R5bGVOYW1lUGF0dGVybi50ZXN0KG5hbWUpKSB7XG4gICAgICB3YXJuQmFkVmVuZG9yZWRTdHlsZU5hbWUobmFtZSk7XG4gICAgfSBlbHNlIGlmIChiYWRTdHlsZVZhbHVlV2l0aFNlbWljb2xvblBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcbiAgICAgIHdhcm5TdHlsZVZhbHVlV2l0aFNlbWljb2xvbihuYW1lLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGlmIChpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgd2FyblN0eWxlVmFsdWVJc05hTihuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKCFpc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICAgICAgd2FyblN0eWxlVmFsdWVJc0luZmluaXR5KG5hbWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbnZhciB3YXJuVmFsaWRTdHlsZSQxID0gd2FyblZhbGlkU3R5bGU7XG5cbnZhciBhcmlhUHJvcGVydGllcyA9IHtcbiAgJ2FyaWEtY3VycmVudCc6IDAsXG4gIC8vIHN0YXRlXG4gICdhcmlhLWRldGFpbHMnOiAwLFxuICAnYXJpYS1kaXNhYmxlZCc6IDAsXG4gIC8vIHN0YXRlXG4gICdhcmlhLWhpZGRlbic6IDAsXG4gIC8vIHN0YXRlXG4gICdhcmlhLWludmFsaWQnOiAwLFxuICAvLyBzdGF0ZVxuICAnYXJpYS1rZXlzaG9ydGN1dHMnOiAwLFxuICAnYXJpYS1sYWJlbCc6IDAsXG4gICdhcmlhLXJvbGVkZXNjcmlwdGlvbic6IDAsXG4gIC8vIFdpZGdldCBBdHRyaWJ1dGVzXG4gICdhcmlhLWF1dG9jb21wbGV0ZSc6IDAsXG4gICdhcmlhLWNoZWNrZWQnOiAwLFxuICAnYXJpYS1leHBhbmRlZCc6IDAsXG4gICdhcmlhLWhhc3BvcHVwJzogMCxcbiAgJ2FyaWEtbGV2ZWwnOiAwLFxuICAnYXJpYS1tb2RhbCc6IDAsXG4gICdhcmlhLW11bHRpbGluZSc6IDAsXG4gICdhcmlhLW11bHRpc2VsZWN0YWJsZSc6IDAsXG4gICdhcmlhLW9yaWVudGF0aW9uJzogMCxcbiAgJ2FyaWEtcGxhY2Vob2xkZXInOiAwLFxuICAnYXJpYS1wcmVzc2VkJzogMCxcbiAgJ2FyaWEtcmVhZG9ubHknOiAwLFxuICAnYXJpYS1yZXF1aXJlZCc6IDAsXG4gICdhcmlhLXNlbGVjdGVkJzogMCxcbiAgJ2FyaWEtc29ydCc6IDAsXG4gICdhcmlhLXZhbHVlbWF4JzogMCxcbiAgJ2FyaWEtdmFsdWVtaW4nOiAwLFxuICAnYXJpYS12YWx1ZW5vdyc6IDAsXG4gICdhcmlhLXZhbHVldGV4dCc6IDAsXG4gIC8vIExpdmUgUmVnaW9uIEF0dHJpYnV0ZXNcbiAgJ2FyaWEtYXRvbWljJzogMCxcbiAgJ2FyaWEtYnVzeSc6IDAsXG4gICdhcmlhLWxpdmUnOiAwLFxuICAnYXJpYS1yZWxldmFudCc6IDAsXG4gIC8vIERyYWctYW5kLURyb3AgQXR0cmlidXRlc1xuICAnYXJpYS1kcm9wZWZmZWN0JzogMCxcbiAgJ2FyaWEtZ3JhYmJlZCc6IDAsXG4gIC8vIFJlbGF0aW9uc2hpcCBBdHRyaWJ1dGVzXG4gICdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnOiAwLFxuICAnYXJpYS1jb2xjb3VudCc6IDAsXG4gICdhcmlhLWNvbGluZGV4JzogMCxcbiAgJ2FyaWEtY29sc3Bhbic6IDAsXG4gICdhcmlhLWNvbnRyb2xzJzogMCxcbiAgJ2FyaWEtZGVzY3JpYmVkYnknOiAwLFxuICAnYXJpYS1lcnJvcm1lc3NhZ2UnOiAwLFxuICAnYXJpYS1mbG93dG8nOiAwLFxuICAnYXJpYS1sYWJlbGxlZGJ5JzogMCxcbiAgJ2FyaWEtb3ducyc6IDAsXG4gICdhcmlhLXBvc2luc2V0JzogMCxcbiAgJ2FyaWEtcm93Y291bnQnOiAwLFxuICAnYXJpYS1yb3dpbmRleCc6IDAsXG4gICdhcmlhLXJvd3NwYW4nOiAwLFxuICAnYXJpYS1zZXRzaXplJzogMFxufTtcblxudmFyIHdhcm5lZFByb3BlcnRpZXMgPSB7fTtcbnZhciByQVJJQSA9IG5ldyBSZWdFeHAoJ14oYXJpYSktWycgKyBBVFRSSUJVVEVfTkFNRV9DSEFSICsgJ10qJCcpO1xudmFyIHJBUklBQ2FtZWwgPSBuZXcgUmVnRXhwKCdeKGFyaWEpW0EtWl1bJyArIEFUVFJJQlVURV9OQU1FX0NIQVIgKyAnXSokJyk7XG52YXIgaGFzT3duUHJvcGVydHkkMiA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcGVydHkodGFnTmFtZSwgbmFtZSkge1xuICBpZiAoaGFzT3duUHJvcGVydHkkMi5jYWxsKHdhcm5lZFByb3BlcnRpZXMsIG5hbWUpICYmIHdhcm5lZFByb3BlcnRpZXNbbmFtZV0pIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChyQVJJQUNhbWVsLnRlc3QobmFtZSkpIHtcbiAgICB2YXIgYXJpYU5hbWUgPSAnYXJpYS0nICsgbmFtZS5zbGljZSg0KS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhciBjb3JyZWN0TmFtZSA9IGFyaWFQcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGFyaWFOYW1lKSA/IGFyaWFOYW1lIDogbnVsbDsgLy8gSWYgdGhpcyBpcyBhbiBhcmlhLSogYXR0cmlidXRlLCBidXQgaXMgbm90IGxpc3RlZCBpbiB0aGUga25vd24gRE9NXG4gICAgLy8gRE9NIHByb3BlcnRpZXMsIHRoZW4gaXQgaXMgYW4gaW52YWxpZCBhcmlhLSogYXR0cmlidXRlLlxuXG4gICAgaWYgKGNvcnJlY3ROYW1lID09IG51bGwpIHtcbiAgICAgIHdhcm5pbmckMShmYWxzZSwgJ0ludmFsaWQgQVJJQSBhdHRyaWJ1dGUgYCVzYC4gQVJJQSBhdHRyaWJ1dGVzIGZvbGxvdyB0aGUgcGF0dGVybiBhcmlhLSogYW5kIG11c3QgYmUgbG93ZXJjYXNlLicsIG5hbWUpO1xuICAgICAgd2FybmVkUHJvcGVydGllc1tuYW1lXSA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IC8vIGFyaWEtKiBhdHRyaWJ1dGVzIHNob3VsZCBiZSBsb3dlcmNhc2U7IHN1Z2dlc3QgdGhlIGxvd2VyY2FzZSB2ZXJzaW9uLlxuXG5cbiAgICBpZiAobmFtZSAhPT0gY29ycmVjdE5hbWUpIHtcbiAgICAgIHdhcm5pbmckMShmYWxzZSwgJ0ludmFsaWQgQVJJQSBhdHRyaWJ1dGUgYCVzYC4gRGlkIHlvdSBtZWFuIGAlc2A/JywgbmFtZSwgY29ycmVjdE5hbWUpO1xuICAgICAgd2FybmVkUHJvcGVydGllc1tuYW1lXSA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAockFSSUEudGVzdChuYW1lKSkge1xuICAgIHZhciBsb3dlckNhc2VkTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICB2YXIgc3RhbmRhcmROYW1lID0gYXJpYVByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkobG93ZXJDYXNlZE5hbWUpID8gbG93ZXJDYXNlZE5hbWUgOiBudWxsOyAvLyBJZiB0aGlzIGlzIGFuIGFyaWEtKiBhdHRyaWJ1dGUsIGJ1dCBpcyBub3QgbGlzdGVkIGluIHRoZSBrbm93biBET01cbiAgICAvLyBET00gcHJvcGVydGllcywgdGhlbiBpdCBpcyBhbiBpbnZhbGlkIGFyaWEtKiBhdHRyaWJ1dGUuXG5cbiAgICBpZiAoc3RhbmRhcmROYW1lID09IG51bGwpIHtcbiAgICAgIHdhcm5lZFByb3BlcnRpZXNbbmFtZV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gLy8gYXJpYS0qIGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGxvd2VyY2FzZTsgc3VnZ2VzdCB0aGUgbG93ZXJjYXNlIHZlcnNpb24uXG5cblxuICAgIGlmIChuYW1lICE9PSBzdGFuZGFyZE5hbWUpIHtcbiAgICAgIHdhcm5pbmckMShmYWxzZSwgJ1Vua25vd24gQVJJQSBhdHRyaWJ1dGUgYCVzYC4gRGlkIHlvdSBtZWFuIGAlc2A/JywgbmFtZSwgc3RhbmRhcmROYW1lKTtcbiAgICAgIHdhcm5lZFByb3BlcnRpZXNbbmFtZV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHdhcm5JbnZhbGlkQVJJQVByb3BzKHR5cGUsIHByb3BzKSB7XG4gIHZhciBpbnZhbGlkUHJvcHMgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICB2YXIgaXNWYWxpZCA9IHZhbGlkYXRlUHJvcGVydHkodHlwZSwga2V5KTtcblxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgaW52YWxpZFByb3BzLnB1c2goa2V5KTtcbiAgICB9XG4gIH1cblxuICB2YXIgdW5rbm93blByb3BTdHJpbmcgPSBpbnZhbGlkUHJvcHMubWFwKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgcmV0dXJuICdgJyArIHByb3AgKyAnYCc7XG4gIH0pLmpvaW4oJywgJyk7XG5cbiAgaWYgKGludmFsaWRQcm9wcy5sZW5ndGggPT09IDEpIHtcbiAgICB3YXJuaW5nJDEoZmFsc2UsICdJbnZhbGlkIGFyaWEgcHJvcCAlcyBvbiA8JXM+IHRhZy4gJyArICdGb3IgZGV0YWlscywgc2VlIGh0dHBzOi8vZmIubWUvaW52YWxpZC1hcmlhLXByb3AnLCB1bmtub3duUHJvcFN0cmluZywgdHlwZSk7XG4gIH0gZWxzZSBpZiAoaW52YWxpZFByb3BzLmxlbmd0aCA+IDEpIHtcbiAgICB3YXJuaW5nJDEoZmFsc2UsICdJbnZhbGlkIGFyaWEgcHJvcHMgJXMgb24gPCVzPiB0YWcuICcgKyAnRm9yIGRldGFpbHMsIHNlZSBodHRwczovL2ZiLm1lL2ludmFsaWQtYXJpYS1wcm9wJywgdW5rbm93blByb3BTdHJpbmcsIHR5cGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcGVydGllcyh0eXBlLCBwcm9wcykge1xuICBpZiAoaXNDdXN0b21Db21wb25lbnQodHlwZSwgcHJvcHMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgd2FybkludmFsaWRBUklBUHJvcHModHlwZSwgcHJvcHMpO1xufVxuXG52YXIgZGlkV2FyblZhbHVlTnVsbCA9IGZhbHNlO1xuZnVuY3Rpb24gdmFsaWRhdGVQcm9wZXJ0aWVzJDEodHlwZSwgcHJvcHMpIHtcbiAgaWYgKHR5cGUgIT09ICdpbnB1dCcgJiYgdHlwZSAhPT0gJ3RleHRhcmVhJyAmJiB0eXBlICE9PSAnc2VsZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChwcm9wcyAhPSBudWxsICYmIHByb3BzLnZhbHVlID09PSBudWxsICYmICFkaWRXYXJuVmFsdWVOdWxsKSB7XG4gICAgZGlkV2FyblZhbHVlTnVsbCA9IHRydWU7XG5cbiAgICBpZiAodHlwZSA9PT0gJ3NlbGVjdCcgJiYgcHJvcHMubXVsdGlwbGUpIHtcbiAgICAgIHdhcm5pbmckMShmYWxzZSwgJ2B2YWx1ZWAgcHJvcCBvbiBgJXNgIHNob3VsZCBub3QgYmUgbnVsbC4gJyArICdDb25zaWRlciB1c2luZyBhbiBlbXB0eSBhcnJheSB3aGVuIGBtdWx0aXBsZWAgaXMgc2V0IHRvIGB0cnVlYCAnICsgJ3RvIGNsZWFyIHRoZSBjb21wb25lbnQgb3IgYHVuZGVmaW5lZGAgZm9yIHVuY29udHJvbGxlZCBjb21wb25lbnRzLicsIHR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3YXJuaW5nJDEoZmFsc2UsICdgdmFsdWVgIHByb3Agb24gYCVzYCBzaG91bGQgbm90IGJlIG51bGwuICcgKyAnQ29uc2lkZXIgdXNpbmcgYW4gZW1wdHkgc3RyaW5nIHRvIGNsZWFyIHRoZSBjb21wb25lbnQgb3IgYHVuZGVmaW5lZGAgJyArICdmb3IgdW5jb250cm9sbGVkIGNvbXBvbmVudHMuJywgdHlwZSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVnaXN0ZXJzIHBsdWdpbnMgc28gdGhhdCB0aGV5IGNhbiBleHRyYWN0IGFuZCBkaXNwYXRjaCBldmVudHMuXG4gKlxuICogQHNlZSB7RXZlbnRQbHVnaW5IdWJ9XG4gKi9cblxuLyoqXG4gKiBPcmRlcmVkIGxpc3Qgb2YgaW5qZWN0ZWQgcGx1Z2lucy5cbiAqL1xuXG5cblxuLyoqXG4gKiBNYXBwaW5nIGZyb20gZXZlbnQgbmFtZSB0byBkaXNwYXRjaCBjb25maWdcbiAqL1xuXG5cbi8qKlxuICogTWFwcGluZyBmcm9tIHJlZ2lzdHJhdGlvbiBuYW1lIHRvIHBsdWdpbiBtb2R1bGVcbiAqL1xuXG52YXIgcmVnaXN0cmF0aW9uTmFtZU1vZHVsZXMgPSB7fTtcbi8qKlxuICogTWFwcGluZyBmcm9tIHJlZ2lzdHJhdGlvbiBuYW1lIHRvIGV2ZW50IG5hbWVcbiAqL1xuXG5cbi8qKlxuICogTWFwcGluZyBmcm9tIGxvd2VyY2FzZSByZWdpc3RyYXRpb24gbmFtZXMgdG8gdGhlIHByb3Blcmx5IGNhc2VkIHZlcnNpb24sXG4gKiB1c2VkIHRvIHdhcm4gaW4gdGhlIGNhc2Ugb2YgbWlzc2luZyBldmVudCBoYW5kbGVycy4gQXZhaWxhYmxlXG4gKiBvbmx5IGluIHRydWUuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5cbnZhciBwb3NzaWJsZVJlZ2lzdHJhdGlvbk5hbWVzID0ge307IC8vIFRydXN0IHRoZSBkZXZlbG9wZXIgdG8gb25seSB1c2UgcG9zc2libGVSZWdpc3RyYXRpb25OYW1lcyBpbiB0cnVlXG5cbi8qKlxuICogSW5qZWN0cyBhbiBvcmRlcmluZyBvZiBwbHVnaW5zIChieSBwbHVnaW4gbmFtZSkuIFRoaXMgYWxsb3dzIHRoZSBvcmRlcmluZ1xuICogdG8gYmUgZGVjb3VwbGVkIGZyb20gaW5qZWN0aW9uIG9mIHRoZSBhY3R1YWwgcGx1Z2lucyBzbyB0aGF0IG9yZGVyaW5nIGlzXG4gKiBhbHdheXMgZGV0ZXJtaW5pc3RpYyByZWdhcmRsZXNzIG9mIHBhY2thZ2luZywgb24tdGhlLWZseSBpbmplY3Rpb24sIGV0Yy5cbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBJbmplY3RlZEV2ZW50UGx1Z2luT3JkZXJcbiAqIEBpbnRlcm5hbFxuICogQHNlZSB7RXZlbnRQbHVnaW5IdWIuaW5qZWN0aW9uLmluamVjdEV2ZW50UGx1Z2luT3JkZXJ9XG4gKi9cblxuXG4vKipcbiAqIEluamVjdHMgcGx1Z2lucyB0byBiZSB1c2VkIGJ5IGBFdmVudFBsdWdpbkh1YmAuIFRoZSBwbHVnaW4gbmFtZXMgbXVzdCBiZVxuICogaW4gdGhlIG9yZGVyaW5nIGluamVjdGVkIGJ5IGBpbmplY3RFdmVudFBsdWdpbk9yZGVyYC5cbiAqXG4gKiBQbHVnaW5zIGNhbiBiZSBpbmplY3RlZCBhcyBwYXJ0IG9mIHBhZ2UgaW5pdGlhbGl6YXRpb24gb3Igb24tdGhlLWZseS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gaW5qZWN0ZWROYW1lc1RvUGx1Z2lucyBNYXAgZnJvbSBuYW1lcyB0byBwbHVnaW4gbW9kdWxlcy5cbiAqIEBpbnRlcm5hbFxuICogQHNlZSB7RXZlbnRQbHVnaW5IdWIuaW5qZWN0aW9uLmluamVjdEV2ZW50UGx1Z2luc0J5TmFtZX1cbiAqL1xuXG4vLyBXaGVuIGFkZGluZyBhdHRyaWJ1dGVzIHRvIHRoZSBIVE1MIG9yIFNWRyB3aGl0ZWxpc3QsIGJlIHN1cmUgdG9cbi8vIGFsc28gYWRkIHRoZW0gdG8gdGhpcyBtb2R1bGUgdG8gZW5zdXJlIGNhc2luZyBhbmQgaW5jb3JyZWN0IG5hbWVcbi8vIHdhcm5pbmdzLlxudmFyIHBvc3NpYmxlU3RhbmRhcmROYW1lcyA9IHtcbiAgLy8gSFRNTFxuICBhY2NlcHQ6ICdhY2NlcHQnLFxuICBhY2NlcHRjaGFyc2V0OiAnYWNjZXB0Q2hhcnNldCcsXG4gICdhY2NlcHQtY2hhcnNldCc6ICdhY2NlcHRDaGFyc2V0JyxcbiAgYWNjZXNza2V5OiAnYWNjZXNzS2V5JyxcbiAgYWN0aW9uOiAnYWN0aW9uJyxcbiAgYWxsb3dmdWxsc2NyZWVuOiAnYWxsb3dGdWxsU2NyZWVuJyxcbiAgYWx0OiAnYWx0JyxcbiAgYXM6ICdhcycsXG4gIGFzeW5jOiAnYXN5bmMnLFxuICBhdXRvY2FwaXRhbGl6ZTogJ2F1dG9DYXBpdGFsaXplJyxcbiAgYXV0b2NvbXBsZXRlOiAnYXV0b0NvbXBsZXRlJyxcbiAgYXV0b2NvcnJlY3Q6ICdhdXRvQ29ycmVjdCcsXG4gIGF1dG9mb2N1czogJ2F1dG9Gb2N1cycsXG4gIGF1dG9wbGF5OiAnYXV0b1BsYXknLFxuICBhdXRvc2F2ZTogJ2F1dG9TYXZlJyxcbiAgY2FwdHVyZTogJ2NhcHR1cmUnLFxuICBjZWxscGFkZGluZzogJ2NlbGxQYWRkaW5nJyxcbiAgY2VsbHNwYWNpbmc6ICdjZWxsU3BhY2luZycsXG4gIGNoYWxsZW5nZTogJ2NoYWxsZW5nZScsXG4gIGNoYXJzZXQ6ICdjaGFyU2V0JyxcbiAgY2hlY2tlZDogJ2NoZWNrZWQnLFxuICBjaGlsZHJlbjogJ2NoaWxkcmVuJyxcbiAgY2l0ZTogJ2NpdGUnLFxuICBjbGFzczogJ2NsYXNzTmFtZScsXG4gIGNsYXNzaWQ6ICdjbGFzc0lEJyxcbiAgY2xhc3NuYW1lOiAnY2xhc3NOYW1lJyxcbiAgY29sczogJ2NvbHMnLFxuICBjb2xzcGFuOiAnY29sU3BhbicsXG4gIGNvbnRlbnQ6ICdjb250ZW50JyxcbiAgY29udGVudGVkaXRhYmxlOiAnY29udGVudEVkaXRhYmxlJyxcbiAgY29udGV4dG1lbnU6ICdjb250ZXh0TWVudScsXG4gIGNvbnRyb2xzOiAnY29udHJvbHMnLFxuICBjb250cm9sc2xpc3Q6ICdjb250cm9sc0xpc3QnLFxuICBjb29yZHM6ICdjb29yZHMnLFxuICBjcm9zc29yaWdpbjogJ2Nyb3NzT3JpZ2luJyxcbiAgZGFuZ2Vyb3VzbHlzZXRpbm5lcmh0bWw6ICdkYW5nZXJvdXNseVNldElubmVySFRNTCcsXG4gIGRhdGE6ICdkYXRhJyxcbiAgZGF0ZXRpbWU6ICdkYXRlVGltZScsXG4gIGRlZmF1bHQ6ICdkZWZhdWx0JyxcbiAgZGVmYXVsdGNoZWNrZWQ6ICdkZWZhdWx0Q2hlY2tlZCcsXG4gIGRlZmF1bHR2YWx1ZTogJ2RlZmF1bHRWYWx1ZScsXG4gIGRlZmVyOiAnZGVmZXInLFxuICBkaXI6ICdkaXInLFxuICBkaXNhYmxlZDogJ2Rpc2FibGVkJyxcbiAgZGlzYWJsZXBpY3R1cmVpbnBpY3R1cmU6ICdkaXNhYmxlUGljdHVyZUluUGljdHVyZScsXG4gIGRvd25sb2FkOiAnZG93bmxvYWQnLFxuICBkcmFnZ2FibGU6ICdkcmFnZ2FibGUnLFxuICBlbmN0eXBlOiAnZW5jVHlwZScsXG4gIGZvcjogJ2h0bWxGb3InLFxuICBmb3JtOiAnZm9ybScsXG4gIGZvcm1tZXRob2Q6ICdmb3JtTWV0aG9kJyxcbiAgZm9ybWFjdGlvbjogJ2Zvcm1BY3Rpb24nLFxuICBmb3JtZW5jdHlwZTogJ2Zvcm1FbmNUeXBlJyxcbiAgZm9ybW5vdmFsaWRhdGU6ICdmb3JtTm9WYWxpZGF0ZScsXG4gIGZvcm10YXJnZXQ6ICdmb3JtVGFyZ2V0JyxcbiAgZnJhbWVib3JkZXI6ICdmcmFtZUJvcmRlcicsXG4gIGhlYWRlcnM6ICdoZWFkZXJzJyxcbiAgaGVpZ2h0OiAnaGVpZ2h0JyxcbiAgaGlkZGVuOiAnaGlkZGVuJyxcbiAgaGlnaDogJ2hpZ2gnLFxuICBocmVmOiAnaHJlZicsXG4gIGhyZWZsYW5nOiAnaHJlZkxhbmcnLFxuICBodG1sZm9yOiAnaHRtbEZvcicsXG4gIGh0dHBlcXVpdjogJ2h0dHBFcXVpdicsXG4gICdodHRwLWVxdWl2JzogJ2h0dHBFcXVpdicsXG4gIGljb246ICdpY29uJyxcbiAgaWQ6ICdpZCcsXG4gIGlubmVyaHRtbDogJ2lubmVySFRNTCcsXG4gIGlucHV0bW9kZTogJ2lucHV0TW9kZScsXG4gIGludGVncml0eTogJ2ludGVncml0eScsXG4gIGlzOiAnaXMnLFxuICBpdGVtaWQ6ICdpdGVtSUQnLFxuICBpdGVtcHJvcDogJ2l0ZW1Qcm9wJyxcbiAgaXRlbXJlZjogJ2l0ZW1SZWYnLFxuICBpdGVtc2NvcGU6ICdpdGVtU2NvcGUnLFxuICBpdGVtdHlwZTogJ2l0ZW1UeXBlJyxcbiAga2V5cGFyYW1zOiAna2V5UGFyYW1zJyxcbiAga2V5dHlwZTogJ2tleVR5cGUnLFxuICBraW5kOiAna2luZCcsXG4gIGxhYmVsOiAnbGFiZWwnLFxuICBsYW5nOiAnbGFuZycsXG4gIGxpc3Q6ICdsaXN0JyxcbiAgbG9vcDogJ2xvb3AnLFxuICBsb3c6ICdsb3cnLFxuICBtYW5pZmVzdDogJ21hbmlmZXN0JyxcbiAgbWFyZ2lud2lkdGg6ICdtYXJnaW5XaWR0aCcsXG4gIG1hcmdpbmhlaWdodDogJ21hcmdpbkhlaWdodCcsXG4gIG1heDogJ21heCcsXG4gIG1heGxlbmd0aDogJ21heExlbmd0aCcsXG4gIG1lZGlhOiAnbWVkaWEnLFxuICBtZWRpYWdyb3VwOiAnbWVkaWFHcm91cCcsXG4gIG1ldGhvZDogJ21ldGhvZCcsXG4gIG1pbjogJ21pbicsXG4gIG1pbmxlbmd0aDogJ21pbkxlbmd0aCcsXG4gIG11bHRpcGxlOiAnbXVsdGlwbGUnLFxuICBtdXRlZDogJ211dGVkJyxcbiAgbmFtZTogJ25hbWUnLFxuICBub21vZHVsZTogJ25vTW9kdWxlJyxcbiAgbm9uY2U6ICdub25jZScsXG4gIG5vdmFsaWRhdGU6ICdub1ZhbGlkYXRlJyxcbiAgb3BlbjogJ29wZW4nLFxuICBvcHRpbXVtOiAnb3B0aW11bScsXG4gIHBhdHRlcm46ICdwYXR0ZXJuJyxcbiAgcGxhY2Vob2xkZXI6ICdwbGFjZWhvbGRlcicsXG4gIHBsYXlzaW5saW5lOiAncGxheXNJbmxpbmUnLFxuICBwb3N0ZXI6ICdwb3N0ZXInLFxuICBwcmVsb2FkOiAncHJlbG9hZCcsXG4gIHByb2ZpbGU6ICdwcm9maWxlJyxcbiAgcmFkaW9ncm91cDogJ3JhZGlvR3JvdXAnLFxuICByZWFkb25seTogJ3JlYWRPbmx5JyxcbiAgcmVmZXJyZXJwb2xpY3k6ICdyZWZlcnJlclBvbGljeScsXG4gIHJlbDogJ3JlbCcsXG4gIHJlcXVpcmVkOiAncmVxdWlyZWQnLFxuICByZXZlcnNlZDogJ3JldmVyc2VkJyxcbiAgcm9sZTogJ3JvbGUnLFxuICByb3dzOiAncm93cycsXG4gIHJvd3NwYW46ICdyb3dTcGFuJyxcbiAgc2FuZGJveDogJ3NhbmRib3gnLFxuICBzY29wZTogJ3Njb3BlJyxcbiAgc2NvcGVkOiAnc2NvcGVkJyxcbiAgc2Nyb2xsaW5nOiAnc2Nyb2xsaW5nJyxcbiAgc2VhbWxlc3M6ICdzZWFtbGVzcycsXG4gIHNlbGVjdGVkOiAnc2VsZWN0ZWQnLFxuICBzaGFwZTogJ3NoYXBlJyxcbiAgc2l6ZTogJ3NpemUnLFxuICBzaXplczogJ3NpemVzJyxcbiAgc3BhbjogJ3NwYW4nLFxuICBzcGVsbGNoZWNrOiAnc3BlbGxDaGVjaycsXG4gIHNyYzogJ3NyYycsXG4gIHNyY2RvYzogJ3NyY0RvYycsXG4gIHNyY2xhbmc6ICdzcmNMYW5nJyxcbiAgc3Jjc2V0OiAnc3JjU2V0JyxcbiAgc3RhcnQ6ICdzdGFydCcsXG4gIHN0ZXA6ICdzdGVwJyxcbiAgc3R5bGU6ICdzdHlsZScsXG4gIHN1bW1hcnk6ICdzdW1tYXJ5JyxcbiAgdGFiaW5kZXg6ICd0YWJJbmRleCcsXG4gIHRhcmdldDogJ3RhcmdldCcsXG4gIHRpdGxlOiAndGl0bGUnLFxuICB0eXBlOiAndHlwZScsXG4gIHVzZW1hcDogJ3VzZU1hcCcsXG4gIHZhbHVlOiAndmFsdWUnLFxuICB3aWR0aDogJ3dpZHRoJyxcbiAgd21vZGU6ICd3bW9kZScsXG4gIHdyYXA6ICd3cmFwJyxcbiAgLy8gU1ZHXG4gIGFib3V0OiAnYWJvdXQnLFxuICBhY2NlbnRoZWlnaHQ6ICdhY2NlbnRIZWlnaHQnLFxuICAnYWNjZW50LWhlaWdodCc6ICdhY2NlbnRIZWlnaHQnLFxuICBhY2N1bXVsYXRlOiAnYWNjdW11bGF0ZScsXG4gIGFkZGl0aXZlOiAnYWRkaXRpdmUnLFxuICBhbGlnbm1lbnRiYXNlbGluZTogJ2FsaWdubWVudEJhc2VsaW5lJyxcbiAgJ2FsaWdubWVudC1iYXNlbGluZSc6ICdhbGlnbm1lbnRCYXNlbGluZScsXG4gIGFsbG93cmVvcmRlcjogJ2FsbG93UmVvcmRlcicsXG4gIGFscGhhYmV0aWM6ICdhbHBoYWJldGljJyxcbiAgYW1wbGl0dWRlOiAnYW1wbGl0dWRlJyxcbiAgYXJhYmljZm9ybTogJ2FyYWJpY0Zvcm0nLFxuICAnYXJhYmljLWZvcm0nOiAnYXJhYmljRm9ybScsXG4gIGFzY2VudDogJ2FzY2VudCcsXG4gIGF0dHJpYnV0ZW5hbWU6ICdhdHRyaWJ1dGVOYW1lJyxcbiAgYXR0cmlidXRldHlwZTogJ2F0dHJpYnV0ZVR5cGUnLFxuICBhdXRvcmV2ZXJzZTogJ2F1dG9SZXZlcnNlJyxcbiAgYXppbXV0aDogJ2F6aW11dGgnLFxuICBiYXNlZnJlcXVlbmN5OiAnYmFzZUZyZXF1ZW5jeScsXG4gIGJhc2VsaW5lc2hpZnQ6ICdiYXNlbGluZVNoaWZ0JyxcbiAgJ2Jhc2VsaW5lLXNoaWZ0JzogJ2Jhc2VsaW5lU2hpZnQnLFxuICBiYXNlcHJvZmlsZTogJ2Jhc2VQcm9maWxlJyxcbiAgYmJveDogJ2Jib3gnLFxuICBiZWdpbjogJ2JlZ2luJyxcbiAgYmlhczogJ2JpYXMnLFxuICBieTogJ2J5JyxcbiAgY2FsY21vZGU6ICdjYWxjTW9kZScsXG4gIGNhcGhlaWdodDogJ2NhcEhlaWdodCcsXG4gICdjYXAtaGVpZ2h0JzogJ2NhcEhlaWdodCcsXG4gIGNsaXA6ICdjbGlwJyxcbiAgY2xpcHBhdGg6ICdjbGlwUGF0aCcsXG4gICdjbGlwLXBhdGgnOiAnY2xpcFBhdGgnLFxuICBjbGlwcGF0aHVuaXRzOiAnY2xpcFBhdGhVbml0cycsXG4gIGNsaXBydWxlOiAnY2xpcFJ1bGUnLFxuICAnY2xpcC1ydWxlJzogJ2NsaXBSdWxlJyxcbiAgY29sb3I6ICdjb2xvcicsXG4gIGNvbG9yaW50ZXJwb2xhdGlvbjogJ2NvbG9ySW50ZXJwb2xhdGlvbicsXG4gICdjb2xvci1pbnRlcnBvbGF0aW9uJzogJ2NvbG9ySW50ZXJwb2xhdGlvbicsXG4gIGNvbG9yaW50ZXJwb2xhdGlvbmZpbHRlcnM6ICdjb2xvckludGVycG9sYXRpb25GaWx0ZXJzJyxcbiAgJ2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVycyc6ICdjb2xvckludGVycG9sYXRpb25GaWx0ZXJzJyxcbiAgY29sb3Jwcm9maWxlOiAnY29sb3JQcm9maWxlJyxcbiAgJ2NvbG9yLXByb2ZpbGUnOiAnY29sb3JQcm9maWxlJyxcbiAgY29sb3JyZW5kZXJpbmc6ICdjb2xvclJlbmRlcmluZycsXG4gICdjb2xvci1yZW5kZXJpbmcnOiAnY29sb3JSZW5kZXJpbmcnLFxuICBjb250ZW50c2NyaXB0dHlwZTogJ2NvbnRlbnRTY3JpcHRUeXBlJyxcbiAgY29udGVudHN0eWxldHlwZTogJ2NvbnRlbnRTdHlsZVR5cGUnLFxuICBjdXJzb3I6ICdjdXJzb3InLFxuICBjeDogJ2N4JyxcbiAgY3k6ICdjeScsXG4gIGQ6ICdkJyxcbiAgZGF0YXR5cGU6ICdkYXRhdHlwZScsXG4gIGRlY2VsZXJhdGU6ICdkZWNlbGVyYXRlJyxcbiAgZGVzY2VudDogJ2Rlc2NlbnQnLFxuICBkaWZmdXNlY29uc3RhbnQ6ICdkaWZmdXNlQ29uc3RhbnQnLFxuICBkaXJlY3Rpb246ICdkaXJlY3Rpb24nLFxuICBkaXNwbGF5OiAnZGlzcGxheScsXG4gIGRpdmlzb3I6ICdkaXZpc29yJyxcbiAgZG9taW5hbnRiYXNlbGluZTogJ2RvbWluYW50QmFzZWxpbmUnLFxuICAnZG9taW5hbnQtYmFzZWxpbmUnOiAnZG9taW5hbnRCYXNlbGluZScsXG4gIGR1cjogJ2R1cicsXG4gIGR4OiAnZHgnLFxuICBkeTogJ2R5JyxcbiAgZWRnZW1vZGU6ICdlZGdlTW9kZScsXG4gIGVsZXZhdGlvbjogJ2VsZXZhdGlvbicsXG4gIGVuYWJsZWJhY2tncm91bmQ6ICdlbmFibGVCYWNrZ3JvdW5kJyxcbiAgJ2VuYWJsZS1iYWNrZ3JvdW5kJzogJ2VuYWJsZUJhY2tncm91bmQnLFxuICBlbmQ6ICdlbmQnLFxuICBleHBvbmVudDogJ2V4cG9uZW50JyxcbiAgZXh0ZXJuYWxyZXNvdXJjZXNyZXF1aXJlZDogJ2V4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWQnLFxuICBmaWxsOiAnZmlsbCcsXG4gIGZpbGxvcGFjaXR5OiAnZmlsbE9wYWNpdHknLFxuICAnZmlsbC1vcGFjaXR5JzogJ2ZpbGxPcGFjaXR5JyxcbiAgZmlsbHJ1bGU6ICdmaWxsUnVsZScsXG4gICdmaWxsLXJ1bGUnOiAnZmlsbFJ1bGUnLFxuICBmaWx0ZXI6ICdmaWx0ZXInLFxuICBmaWx0ZXJyZXM6ICdmaWx0ZXJSZXMnLFxuICBmaWx0ZXJ1bml0czogJ2ZpbHRlclVuaXRzJyxcbiAgZmxvb2RvcGFjaXR5OiAnZmxvb2RPcGFjaXR5JyxcbiAgJ2Zsb29kLW9wYWNpdHknOiAnZmxvb2RPcGFjaXR5JyxcbiAgZmxvb2Rjb2xvcjogJ2Zsb29kQ29sb3InLFxuICAnZmxvb2QtY29sb3InOiAnZmxvb2RDb2xvcicsXG4gIGZvY3VzYWJsZTogJ2ZvY3VzYWJsZScsXG4gIGZvbnRmYW1pbHk6ICdmb250RmFtaWx5JyxcbiAgJ2ZvbnQtZmFtaWx5JzogJ2ZvbnRGYW1pbHknLFxuICBmb250c2l6ZTogJ2ZvbnRTaXplJyxcbiAgJ2ZvbnQtc2l6ZSc6ICdmb250U2l6ZScsXG4gIGZvbnRzaXplYWRqdXN0OiAnZm9udFNpemVBZGp1c3QnLFxuICAnZm9udC1zaXplLWFkanVzdCc6ICdmb250U2l6ZUFkanVzdCcsXG4gIGZvbnRzdHJldGNoOiAnZm9udFN0cmV0Y2gnLFxuICAnZm9udC1zdHJldGNoJzogJ2ZvbnRTdHJldGNoJyxcbiAgZm9udHN0eWxlOiAnZm9udFN0eWxlJyxcbiAgJ2ZvbnQtc3R5bGUnOiAnZm9udFN0eWxlJyxcbiAgZm9udHZhcmlhbnQ6ICdmb250VmFyaWFudCcsXG4gICdmb250LXZhcmlhbnQnOiAnZm9udFZhcmlhbnQnLFxuICBmb250d2VpZ2h0OiAnZm9udFdlaWdodCcsXG4gICdmb250LXdlaWdodCc6ICdmb250V2VpZ2h0JyxcbiAgZm9ybWF0OiAnZm9ybWF0JyxcbiAgZnJvbTogJ2Zyb20nLFxuICBmeDogJ2Z4JyxcbiAgZnk6ICdmeScsXG4gIGcxOiAnZzEnLFxuICBnMjogJ2cyJyxcbiAgZ2x5cGhuYW1lOiAnZ2x5cGhOYW1lJyxcbiAgJ2dseXBoLW5hbWUnOiAnZ2x5cGhOYW1lJyxcbiAgZ2x5cGhvcmllbnRhdGlvbmhvcml6b250YWw6ICdnbHlwaE9yaWVudGF0aW9uSG9yaXpvbnRhbCcsXG4gICdnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsJzogJ2dseXBoT3JpZW50YXRpb25Ib3Jpem9udGFsJyxcbiAgZ2x5cGhvcmllbnRhdGlvbnZlcnRpY2FsOiAnZ2x5cGhPcmllbnRhdGlvblZlcnRpY2FsJyxcbiAgJ2dseXBoLW9yaWVudGF0aW9uLXZlcnRpY2FsJzogJ2dseXBoT3JpZW50YXRpb25WZXJ0aWNhbCcsXG4gIGdseXBocmVmOiAnZ2x5cGhSZWYnLFxuICBncmFkaWVudHRyYW5zZm9ybTogJ2dyYWRpZW50VHJhbnNmb3JtJyxcbiAgZ3JhZGllbnR1bml0czogJ2dyYWRpZW50VW5pdHMnLFxuICBoYW5naW5nOiAnaGFuZ2luZycsXG4gIGhvcml6YWR2eDogJ2hvcml6QWR2WCcsXG4gICdob3Jpei1hZHYteCc6ICdob3JpekFkdlgnLFxuICBob3Jpem9yaWdpbng6ICdob3Jpek9yaWdpblgnLFxuICAnaG9yaXotb3JpZ2luLXgnOiAnaG9yaXpPcmlnaW5YJyxcbiAgaWRlb2dyYXBoaWM6ICdpZGVvZ3JhcGhpYycsXG4gIGltYWdlcmVuZGVyaW5nOiAnaW1hZ2VSZW5kZXJpbmcnLFxuICAnaW1hZ2UtcmVuZGVyaW5nJzogJ2ltYWdlUmVuZGVyaW5nJyxcbiAgaW4yOiAnaW4yJyxcbiAgaW46ICdpbicsXG4gIGlubGlzdDogJ2lubGlzdCcsXG4gIGludGVyY2VwdDogJ2ludGVyY2VwdCcsXG4gIGsxOiAnazEnLFxuICBrMjogJ2syJyxcbiAgazM6ICdrMycsXG4gIGs0OiAnazQnLFxuICBrOiAnaycsXG4gIGtlcm5lbG1hdHJpeDogJ2tlcm5lbE1hdHJpeCcsXG4gIGtlcm5lbHVuaXRsZW5ndGg6ICdrZXJuZWxVbml0TGVuZ3RoJyxcbiAga2VybmluZzogJ2tlcm5pbmcnLFxuICBrZXlwb2ludHM6ICdrZXlQb2ludHMnLFxuICBrZXlzcGxpbmVzOiAna2V5U3BsaW5lcycsXG4gIGtleXRpbWVzOiAna2V5VGltZXMnLFxuICBsZW5ndGhhZGp1c3Q6ICdsZW5ndGhBZGp1c3QnLFxuICBsZXR0ZXJzcGFjaW5nOiAnbGV0dGVyU3BhY2luZycsXG4gICdsZXR0ZXItc3BhY2luZyc6ICdsZXR0ZXJTcGFjaW5nJyxcbiAgbGlnaHRpbmdjb2xvcjogJ2xpZ2h0aW5nQ29sb3InLFxuICAnbGlnaHRpbmctY29sb3InOiAnbGlnaHRpbmdDb2xvcicsXG4gIGxpbWl0aW5nY29uZWFuZ2xlOiAnbGltaXRpbmdDb25lQW5nbGUnLFxuICBsb2NhbDogJ2xvY2FsJyxcbiAgbWFya2VyZW5kOiAnbWFya2VyRW5kJyxcbiAgJ21hcmtlci1lbmQnOiAnbWFya2VyRW5kJyxcbiAgbWFya2VyaGVpZ2h0OiAnbWFya2VySGVpZ2h0JyxcbiAgbWFya2VybWlkOiAnbWFya2VyTWlkJyxcbiAgJ21hcmtlci1taWQnOiAnbWFya2VyTWlkJyxcbiAgbWFya2Vyc3RhcnQ6ICdtYXJrZXJTdGFydCcsXG4gICdtYXJrZXItc3RhcnQnOiAnbWFya2VyU3RhcnQnLFxuICBtYXJrZXJ1bml0czogJ21hcmtlclVuaXRzJyxcbiAgbWFya2Vyd2lkdGg6ICdtYXJrZXJXaWR0aCcsXG4gIG1hc2s6ICdtYXNrJyxcbiAgbWFza2NvbnRlbnR1bml0czogJ21hc2tDb250ZW50VW5pdHMnLFxuICBtYXNrdW5pdHM6ICdtYXNrVW5pdHMnLFxuICBtYXRoZW1hdGljYWw6ICdtYXRoZW1hdGljYWwnLFxuICBtb2RlOiAnbW9kZScsXG4gIG51bW9jdGF2ZXM6ICdudW1PY3RhdmVzJyxcbiAgb2Zmc2V0OiAnb2Zmc2V0JyxcbiAgb3BhY2l0eTogJ29wYWNpdHknLFxuICBvcGVyYXRvcjogJ29wZXJhdG9yJyxcbiAgb3JkZXI6ICdvcmRlcicsXG4gIG9yaWVudDogJ29yaWVudCcsXG4gIG9yaWVudGF0aW9uOiAnb3JpZW50YXRpb24nLFxuICBvcmlnaW46ICdvcmlnaW4nLFxuICBvdmVyZmxvdzogJ292ZXJmbG93JyxcbiAgb3ZlcmxpbmVwb3NpdGlvbjogJ292ZXJsaW5lUG9zaXRpb24nLFxuICAnb3ZlcmxpbmUtcG9zaXRpb24nOiAnb3ZlcmxpbmVQb3NpdGlvbicsXG4gIG92ZXJsaW5ldGhpY2tuZXNzOiAnb3ZlcmxpbmVUaGlja25lc3MnLFxuICAnb3ZlcmxpbmUtdGhpY2tuZXNzJzogJ292ZXJsaW5lVGhpY2tuZXNzJyxcbiAgcGFpbnRvcmRlcjogJ3BhaW50T3JkZXInLFxuICAncGFpbnQtb3JkZXInOiAncGFpbnRPcmRlcicsXG4gIHBhbm9zZTE6ICdwYW5vc2UxJyxcbiAgJ3Bhbm9zZS0xJzogJ3Bhbm9zZTEnLFxuICBwYXRobGVuZ3RoOiAncGF0aExlbmd0aCcsXG4gIHBhdHRlcm5jb250ZW50dW5pdHM6ICdwYXR0ZXJuQ29udGVudFVuaXRzJyxcbiAgcGF0dGVybnRyYW5zZm9ybTogJ3BhdHRlcm5UcmFuc2Zvcm0nLFxuICBwYXR0ZXJudW5pdHM6ICdwYXR0ZXJuVW5pdHMnLFxuICBwb2ludGVyZXZlbnRzOiAncG9pbnRlckV2ZW50cycsXG4gICdwb2ludGVyLWV2ZW50cyc6ICdwb2ludGVyRXZlbnRzJyxcbiAgcG9pbnRzOiAncG9pbnRzJyxcbiAgcG9pbnRzYXR4OiAncG9pbnRzQXRYJyxcbiAgcG9pbnRzYXR5OiAncG9pbnRzQXRZJyxcbiAgcG9pbnRzYXR6OiAncG9pbnRzQXRaJyxcbiAgcHJlZml4OiAncHJlZml4JyxcbiAgcHJlc2VydmVhbHBoYTogJ3ByZXNlcnZlQWxwaGEnLFxuICBwcmVzZXJ2ZWFzcGVjdHJhdGlvOiAncHJlc2VydmVBc3BlY3RSYXRpbycsXG4gIHByaW1pdGl2ZXVuaXRzOiAncHJpbWl0aXZlVW5pdHMnLFxuICBwcm9wZXJ0eTogJ3Byb3BlcnR5JyxcbiAgcjogJ3InLFxuICByYWRpdXM6ICdyYWRpdXMnLFxuICByZWZ4OiAncmVmWCcsXG4gIHJlZnk6ICdyZWZZJyxcbiAgcmVuZGVyaW5naW50ZW50OiAncmVuZGVyaW5nSW50ZW50JyxcbiAgJ3JlbmRlcmluZy1pbnRlbnQnOiAncmVuZGVyaW5nSW50ZW50JyxcbiAgcmVwZWF0Y291bnQ6ICdyZXBlYXRDb3VudCcsXG4gIHJlcGVhdGR1cjogJ3JlcGVhdER1cicsXG4gIHJlcXVpcmVkZXh0ZW5zaW9uczogJ3JlcXVpcmVkRXh0ZW5zaW9ucycsXG4gIHJlcXVpcmVkZmVhdHVyZXM6ICdyZXF1aXJlZEZlYXR1cmVzJyxcbiAgcmVzb3VyY2U6ICdyZXNvdXJjZScsXG4gIHJlc3RhcnQ6ICdyZXN0YXJ0JyxcbiAgcmVzdWx0OiAncmVzdWx0JyxcbiAgcmVzdWx0czogJ3Jlc3VsdHMnLFxuICByb3RhdGU6ICdyb3RhdGUnLFxuICByeDogJ3J4JyxcbiAgcnk6ICdyeScsXG4gIHNjYWxlOiAnc2NhbGUnLFxuICBzZWN1cml0eTogJ3NlY3VyaXR5JyxcbiAgc2VlZDogJ3NlZWQnLFxuICBzaGFwZXJlbmRlcmluZzogJ3NoYXBlUmVuZGVyaW5nJyxcbiAgJ3NoYXBlLXJlbmRlcmluZyc6ICdzaGFwZVJlbmRlcmluZycsXG4gIHNsb3BlOiAnc2xvcGUnLFxuICBzcGFjaW5nOiAnc3BhY2luZycsXG4gIHNwZWN1bGFyY29uc3RhbnQ6ICdzcGVjdWxhckNvbnN0YW50JyxcbiAgc3BlY3VsYXJleHBvbmVudDogJ3NwZWN1bGFyRXhwb25lbnQnLFxuICBzcGVlZDogJ3NwZWVkJyxcbiAgc3ByZWFkbWV0aG9kOiAnc3ByZWFkTWV0aG9kJyxcbiAgc3RhcnRvZmZzZXQ6ICdzdGFydE9mZnNldCcsXG4gIHN0ZGRldmlhdGlvbjogJ3N0ZERldmlhdGlvbicsXG4gIHN0ZW1oOiAnc3RlbWgnLFxuICBzdGVtdjogJ3N0ZW12JyxcbiAgc3RpdGNodGlsZXM6ICdzdGl0Y2hUaWxlcycsXG4gIHN0b3Bjb2xvcjogJ3N0b3BDb2xvcicsXG4gICdzdG9wLWNvbG9yJzogJ3N0b3BDb2xvcicsXG4gIHN0b3BvcGFjaXR5OiAnc3RvcE9wYWNpdHknLFxuICAnc3RvcC1vcGFjaXR5JzogJ3N0b3BPcGFjaXR5JyxcbiAgc3RyaWtldGhyb3VnaHBvc2l0aW9uOiAnc3RyaWtldGhyb3VnaFBvc2l0aW9uJyxcbiAgJ3N0cmlrZXRocm91Z2gtcG9zaXRpb24nOiAnc3RyaWtldGhyb3VnaFBvc2l0aW9uJyxcbiAgc3RyaWtldGhyb3VnaHRoaWNrbmVzczogJ3N0cmlrZXRocm91Z2hUaGlja25lc3MnLFxuICAnc3RyaWtldGhyb3VnaC10aGlja25lc3MnOiAnc3RyaWtldGhyb3VnaFRoaWNrbmVzcycsXG4gIHN0cmluZzogJ3N0cmluZycsXG4gIHN0cm9rZTogJ3N0cm9rZScsXG4gIHN0cm9rZWRhc2hhcnJheTogJ3N0cm9rZURhc2hhcnJheScsXG4gICdzdHJva2UtZGFzaGFycmF5JzogJ3N0cm9rZURhc2hhcnJheScsXG4gIHN0cm9rZWRhc2hvZmZzZXQ6ICdzdHJva2VEYXNob2Zmc2V0JyxcbiAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogJ3N0cm9rZURhc2hvZmZzZXQnLFxuICBzdHJva2VsaW5lY2FwOiAnc3Ryb2tlTGluZWNhcCcsXG4gICdzdHJva2UtbGluZWNhcCc6ICdzdHJva2VMaW5lY2FwJyxcbiAgc3Ryb2tlbGluZWpvaW46ICdzdHJva2VMaW5lam9pbicsXG4gICdzdHJva2UtbGluZWpvaW4nOiAnc3Ryb2tlTGluZWpvaW4nLFxuICBzdHJva2VtaXRlcmxpbWl0OiAnc3Ryb2tlTWl0ZXJsaW1pdCcsXG4gICdzdHJva2UtbWl0ZXJsaW1pdCc6ICdzdHJva2VNaXRlcmxpbWl0JyxcbiAgc3Ryb2tld2lkdGg6ICdzdHJva2VXaWR0aCcsXG4gICdzdHJva2Utd2lkdGgnOiAnc3Ryb2tlV2lkdGgnLFxuICBzdHJva2VvcGFjaXR5OiAnc3Ryb2tlT3BhY2l0eScsXG4gICdzdHJva2Utb3BhY2l0eSc6ICdzdHJva2VPcGFjaXR5JyxcbiAgc3VwcHJlc3Njb250ZW50ZWRpdGFibGV3YXJuaW5nOiAnc3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nJyxcbiAgc3VwcHJlc3NoeWRyYXRpb253YXJuaW5nOiAnc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nJyxcbiAgc3VyZmFjZXNjYWxlOiAnc3VyZmFjZVNjYWxlJyxcbiAgc3lzdGVtbGFuZ3VhZ2U6ICdzeXN0ZW1MYW5ndWFnZScsXG4gIHRhYmxldmFsdWVzOiAndGFibGVWYWx1ZXMnLFxuICB0YXJnZXR4OiAndGFyZ2V0WCcsXG4gIHRhcmdldHk6ICd0YXJnZXRZJyxcbiAgdGV4dGFuY2hvcjogJ3RleHRBbmNob3InLFxuICAndGV4dC1hbmNob3InOiAndGV4dEFuY2hvcicsXG4gIHRleHRkZWNvcmF0aW9uOiAndGV4dERlY29yYXRpb24nLFxuICAndGV4dC1kZWNvcmF0aW9uJzogJ3RleHREZWNvcmF0aW9uJyxcbiAgdGV4dGxlbmd0aDogJ3RleHRMZW5ndGgnLFxuICB0ZXh0cmVuZGVyaW5nOiAndGV4dFJlbmRlcmluZycsXG4gICd0ZXh0LXJlbmRlcmluZyc6ICd0ZXh0UmVuZGVyaW5nJyxcbiAgdG86ICd0bycsXG4gIHRyYW5zZm9ybTogJ3RyYW5zZm9ybScsXG4gIHR5cGVvZjogJ3R5cGVvZicsXG4gIHUxOiAndTEnLFxuICB1MjogJ3UyJyxcbiAgdW5kZXJsaW5lcG9zaXRpb246ICd1bmRlcmxpbmVQb3NpdGlvbicsXG4gICd1bmRlcmxpbmUtcG9zaXRpb24nOiAndW5kZXJsaW5lUG9zaXRpb24nLFxuICB1bmRlcmxpbmV0aGlja25lc3M6ICd1bmRlcmxpbmVUaGlja25lc3MnLFxuICAndW5kZXJsaW5lLXRoaWNrbmVzcyc6ICd1bmRlcmxpbmVUaGlja25lc3MnLFxuICB1bmljb2RlOiAndW5pY29kZScsXG4gIHVuaWNvZGViaWRpOiAndW5pY29kZUJpZGknLFxuICAndW5pY29kZS1iaWRpJzogJ3VuaWNvZGVCaWRpJyxcbiAgdW5pY29kZXJhbmdlOiAndW5pY29kZVJhbmdlJyxcbiAgJ3VuaWNvZGUtcmFuZ2UnOiAndW5pY29kZVJhbmdlJyxcbiAgdW5pdHNwZXJlbTogJ3VuaXRzUGVyRW0nLFxuICAndW5pdHMtcGVyLWVtJzogJ3VuaXRzUGVyRW0nLFxuICB1bnNlbGVjdGFibGU6ICd1bnNlbGVjdGFibGUnLFxuICB2YWxwaGFiZXRpYzogJ3ZBbHBoYWJldGljJyxcbiAgJ3YtYWxwaGFiZXRpYyc6ICd2QWxwaGFiZXRpYycsXG4gIHZhbHVlczogJ3ZhbHVlcycsXG4gIHZlY3RvcmVmZmVjdDogJ3ZlY3RvckVmZmVjdCcsXG4gICd2ZWN0b3ItZWZmZWN0JzogJ3ZlY3RvckVmZmVjdCcsXG4gIHZlcnNpb246ICd2ZXJzaW9uJyxcbiAgdmVydGFkdnk6ICd2ZXJ0QWR2WScsXG4gICd2ZXJ0LWFkdi15JzogJ3ZlcnRBZHZZJyxcbiAgdmVydG9yaWdpbng6ICd2ZXJ0T3JpZ2luWCcsXG4gICd2ZXJ0LW9yaWdpbi14JzogJ3ZlcnRPcmlnaW5YJyxcbiAgdmVydG9yaWdpbnk6ICd2ZXJ0T3JpZ2luWScsXG4gICd2ZXJ0LW9yaWdpbi15JzogJ3ZlcnRPcmlnaW5ZJyxcbiAgdmhhbmdpbmc6ICd2SGFuZ2luZycsXG4gICd2LWhhbmdpbmcnOiAndkhhbmdpbmcnLFxuICB2aWRlb2dyYXBoaWM6ICd2SWRlb2dyYXBoaWMnLFxuICAndi1pZGVvZ3JhcGhpYyc6ICd2SWRlb2dyYXBoaWMnLFxuICB2aWV3Ym94OiAndmlld0JveCcsXG4gIHZpZXd0YXJnZXQ6ICd2aWV3VGFyZ2V0JyxcbiAgdmlzaWJpbGl0eTogJ3Zpc2liaWxpdHknLFxuICB2bWF0aGVtYXRpY2FsOiAndk1hdGhlbWF0aWNhbCcsXG4gICd2LW1hdGhlbWF0aWNhbCc6ICd2TWF0aGVtYXRpY2FsJyxcbiAgdm9jYWI6ICd2b2NhYicsXG4gIHdpZHRoczogJ3dpZHRocycsXG4gIHdvcmRzcGFjaW5nOiAnd29yZFNwYWNpbmcnLFxuICAnd29yZC1zcGFjaW5nJzogJ3dvcmRTcGFjaW5nJyxcbiAgd3JpdGluZ21vZGU6ICd3cml0aW5nTW9kZScsXG4gICd3cml0aW5nLW1vZGUnOiAnd3JpdGluZ01vZGUnLFxuICB4MTogJ3gxJyxcbiAgeDI6ICd4MicsXG4gIHg6ICd4JyxcbiAgeGNoYW5uZWxzZWxlY3RvcjogJ3hDaGFubmVsU2VsZWN0b3InLFxuICB4aGVpZ2h0OiAneEhlaWdodCcsXG4gICd4LWhlaWdodCc6ICd4SGVpZ2h0JyxcbiAgeGxpbmthY3R1YXRlOiAneGxpbmtBY3R1YXRlJyxcbiAgJ3hsaW5rOmFjdHVhdGUnOiAneGxpbmtBY3R1YXRlJyxcbiAgeGxpbmthcmNyb2xlOiAneGxpbmtBcmNyb2xlJyxcbiAgJ3hsaW5rOmFyY3JvbGUnOiAneGxpbmtBcmNyb2xlJyxcbiAgeGxpbmtocmVmOiAneGxpbmtIcmVmJyxcbiAgJ3hsaW5rOmhyZWYnOiAneGxpbmtIcmVmJyxcbiAgeGxpbmtyb2xlOiAneGxpbmtSb2xlJyxcbiAgJ3hsaW5rOnJvbGUnOiAneGxpbmtSb2xlJyxcbiAgeGxpbmtzaG93OiAneGxpbmtTaG93JyxcbiAgJ3hsaW5rOnNob3cnOiAneGxpbmtTaG93JyxcbiAgeGxpbmt0aXRsZTogJ3hsaW5rVGl0bGUnLFxuICAneGxpbms6dGl0bGUnOiAneGxpbmtUaXRsZScsXG4gIHhsaW5rdHlwZTogJ3hsaW5rVHlwZScsXG4gICd4bGluazp0eXBlJzogJ3hsaW5rVHlwZScsXG4gIHhtbGJhc2U6ICd4bWxCYXNlJyxcbiAgJ3htbDpiYXNlJzogJ3htbEJhc2UnLFxuICB4bWxsYW5nOiAneG1sTGFuZycsXG4gICd4bWw6bGFuZyc6ICd4bWxMYW5nJyxcbiAgeG1sbnM6ICd4bWxucycsXG4gICd4bWw6c3BhY2UnOiAneG1sU3BhY2UnLFxuICB4bWxuc3hsaW5rOiAneG1sbnNYbGluaycsXG4gICd4bWxuczp4bGluayc6ICd4bWxuc1hsaW5rJyxcbiAgeG1sc3BhY2U6ICd4bWxTcGFjZScsXG4gIHkxOiAneTEnLFxuICB5MjogJ3kyJyxcbiAgeTogJ3knLFxuICB5Y2hhbm5lbHNlbGVjdG9yOiAneUNoYW5uZWxTZWxlY3RvcicsXG4gIHo6ICd6JyxcbiAgem9vbWFuZHBhbjogJ3pvb21BbmRQYW4nXG59O1xuXG52YXIgdmFsaWRhdGVQcm9wZXJ0eSQxID0gZnVuY3Rpb24gKCkge307XG5cbntcbiAgdmFyIHdhcm5lZFByb3BlcnRpZXMkMSA9IHt9O1xuICB2YXIgX2hhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIEVWRU5UX05BTUVfUkVHRVggPSAvXm9uLi87XG4gIHZhciBJTlZBTElEX0VWRU5UX05BTUVfUkVHRVggPSAvXm9uW15BLVpdLztcbiAgdmFyIHJBUklBJDEgPSBuZXcgUmVnRXhwKCdeKGFyaWEpLVsnICsgQVRUUklCVVRFX05BTUVfQ0hBUiArICddKiQnKTtcbiAgdmFyIHJBUklBQ2FtZWwkMSA9IG5ldyBSZWdFeHAoJ14oYXJpYSlbQS1aXVsnICsgQVRUUklCVVRFX05BTUVfQ0hBUiArICddKiQnKTtcblxuICB2YWxpZGF0ZVByb3BlcnR5JDEgPSBmdW5jdGlvbiAodGFnTmFtZSwgbmFtZSwgdmFsdWUsIGNhblVzZUV2ZW50U3lzdGVtKSB7XG4gICAgaWYgKF9oYXNPd25Qcm9wZXJ0eS5jYWxsKHdhcm5lZFByb3BlcnRpZXMkMSwgbmFtZSkgJiYgd2FybmVkUHJvcGVydGllcyQxW25hbWVdKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgbG93ZXJDYXNlZE5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAobG93ZXJDYXNlZE5hbWUgPT09ICdvbmZvY3VzaW4nIHx8IGxvd2VyQ2FzZWROYW1lID09PSAnb25mb2N1c291dCcpIHtcbiAgICAgIHdhcm5pbmckMShmYWxzZSwgJ1JlYWN0IHVzZXMgb25Gb2N1cyBhbmQgb25CbHVyIGluc3RlYWQgb2Ygb25Gb2N1c0luIGFuZCBvbkZvY3VzT3V0LiAnICsgJ0FsbCBSZWFjdCBldmVudHMgYXJlIG5vcm1hbGl6ZWQgdG8gYnViYmxlLCBzbyBvbkZvY3VzSW4gYW5kIG9uRm9jdXNPdXQgJyArICdhcmUgbm90IG5lZWRlZC9zdXBwb3J0ZWQgYnkgUmVhY3QuJyk7XG4gICAgICB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSAvLyBXZSBjYW4ndCByZWx5IG9uIHRoZSBldmVudCBzeXN0ZW0gYmVpbmcgaW5qZWN0ZWQgb24gdGhlIHNlcnZlci5cblxuXG4gICAgaWYgKGNhblVzZUV2ZW50U3lzdGVtKSB7XG4gICAgICBpZiAocmVnaXN0cmF0aW9uTmFtZU1vZHVsZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWdpc3RyYXRpb25OYW1lID0gcG9zc2libGVSZWdpc3RyYXRpb25OYW1lcy5oYXNPd25Qcm9wZXJ0eShsb3dlckNhc2VkTmFtZSkgPyBwb3NzaWJsZVJlZ2lzdHJhdGlvbk5hbWVzW2xvd2VyQ2FzZWROYW1lXSA6IG51bGw7XG5cbiAgICAgIGlmIChyZWdpc3RyYXRpb25OYW1lICE9IG51bGwpIHtcbiAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnSW52YWxpZCBldmVudCBoYW5kbGVyIHByb3BlcnR5IGAlc2AuIERpZCB5b3UgbWVhbiBgJXNgPycsIG5hbWUsIHJlZ2lzdHJhdGlvbk5hbWUpO1xuICAgICAgICB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0gPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKEVWRU5UX05BTUVfUkVHRVgudGVzdChuYW1lKSkge1xuICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdVbmtub3duIGV2ZW50IGhhbmRsZXIgcHJvcGVydHkgYCVzYC4gSXQgd2lsbCBiZSBpZ25vcmVkLicsIG5hbWUpO1xuICAgICAgICB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0gPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKEVWRU5UX05BTUVfUkVHRVgudGVzdChuYW1lKSkge1xuICAgICAgLy8gSWYgbm8gZXZlbnQgcGx1Z2lucyBoYXZlIGJlZW4gaW5qZWN0ZWQsIHdlIGFyZSBpbiBhIHNlcnZlciBlbnZpcm9ubWVudC5cbiAgICAgIC8vIFNvIHdlIGNhbid0IHRlbGwgaWYgdGhlIGV2ZW50IG5hbWUgaXMgY29ycmVjdCBmb3Igc3VyZSwgYnV0IHdlIGNhbiBmaWx0ZXJcbiAgICAgIC8vIG91dCBrbm93biBiYWQgb25lcyBsaWtlIGBvbmNsaWNrYC4gV2UgY2FuJ3Qgc3VnZ2VzdCBhIHNwZWNpZmljIHJlcGxhY2VtZW50IHRob3VnaC5cbiAgICAgIGlmIChJTlZBTElEX0VWRU5UX05BTUVfUkVHRVgudGVzdChuYW1lKSkge1xuICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdJbnZhbGlkIGV2ZW50IGhhbmRsZXIgcHJvcGVydHkgYCVzYC4gJyArICdSZWFjdCBldmVudHMgdXNlIHRoZSBjYW1lbENhc2UgbmFtaW5nIGNvbnZlbnRpb24sIGZvciBleGFtcGxlIGBvbkNsaWNrYC4nLCBuYW1lKTtcbiAgICAgIH1cblxuICAgICAgd2FybmVkUHJvcGVydGllcyQxW25hbWVdID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gLy8gTGV0IHRoZSBBUklBIGF0dHJpYnV0ZSBob29rIHZhbGlkYXRlIEFSSUEgYXR0cmlidXRlc1xuXG5cbiAgICBpZiAockFSSUEkMS50ZXN0KG5hbWUpIHx8IHJBUklBQ2FtZWwkMS50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobG93ZXJDYXNlZE5hbWUgPT09ICdpbm5lcmh0bWwnKSB7XG4gICAgICB3YXJuaW5nJDEoZmFsc2UsICdEaXJlY3RseSBzZXR0aW5nIHByb3BlcnR5IGBpbm5lckhUTUxgIGlzIG5vdCBwZXJtaXR0ZWQuICcgKyAnRm9yIG1vcmUgaW5mb3JtYXRpb24sIGxvb2t1cCBkb2N1bWVudGF0aW9uIG9uIGBkYW5nZXJvdXNseVNldElubmVySFRNTGAuJyk7XG4gICAgICB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGxvd2VyQ2FzZWROYW1lID09PSAnYXJpYScpIHtcbiAgICAgIHdhcm5pbmckMShmYWxzZSwgJ1RoZSBgYXJpYWAgYXR0cmlidXRlIGlzIHJlc2VydmVkIGZvciBmdXR1cmUgdXNlIGluIFJlYWN0LiAnICsgJ1Bhc3MgaW5kaXZpZHVhbCBgYXJpYS1gIGF0dHJpYnV0ZXMgaW5zdGVhZC4nKTtcbiAgICAgIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobG93ZXJDYXNlZE5hbWUgPT09ICdpcycgJiYgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB3YXJuaW5nJDEoZmFsc2UsICdSZWNlaXZlZCBhIGAlc2AgZm9yIGEgc3RyaW5nIGF0dHJpYnV0ZSBgaXNgLiBJZiB0aGlzIGlzIGV4cGVjdGVkLCBjYXN0ICcgKyAndGhlIHZhbHVlIHRvIGEgc3RyaW5nLicsIHR5cGVvZiB2YWx1ZSk7XG4gICAgICB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNOYU4odmFsdWUpKSB7XG4gICAgICB3YXJuaW5nJDEoZmFsc2UsICdSZWNlaXZlZCBOYU4gZm9yIHRoZSBgJXNgIGF0dHJpYnV0ZS4gSWYgdGhpcyBpcyBleHBlY3RlZCwgY2FzdCAnICsgJ3RoZSB2YWx1ZSB0byBhIHN0cmluZy4nLCBuYW1lKTtcbiAgICAgIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgcHJvcGVydHlJbmZvID0gZ2V0UHJvcGVydHlJbmZvKG5hbWUpO1xuICAgIHZhciBpc1Jlc2VydmVkID0gcHJvcGVydHlJbmZvICE9PSBudWxsICYmIHByb3BlcnR5SW5mby50eXBlID09PSBSRVNFUlZFRDsgLy8gS25vd24gYXR0cmlidXRlcyBzaG91bGQgbWF0Y2ggdGhlIGNhc2luZyBzcGVjaWZpZWQgaW4gdGhlIHByb3BlcnR5IGNvbmZpZy5cblxuICAgIGlmIChwb3NzaWJsZVN0YW5kYXJkTmFtZXMuaGFzT3duUHJvcGVydHkobG93ZXJDYXNlZE5hbWUpKSB7XG4gICAgICB2YXIgc3RhbmRhcmROYW1lID0gcG9zc2libGVTdGFuZGFyZE5hbWVzW2xvd2VyQ2FzZWROYW1lXTtcblxuICAgICAgaWYgKHN0YW5kYXJkTmFtZSAhPT0gbmFtZSkge1xuICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdJbnZhbGlkIERPTSBwcm9wZXJ0eSBgJXNgLiBEaWQgeW91IG1lYW4gYCVzYD8nLCBuYW1lLCBzdGFuZGFyZE5hbWUpO1xuICAgICAgICB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0gPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFpc1Jlc2VydmVkICYmIG5hbWUgIT09IGxvd2VyQ2FzZWROYW1lKSB7XG4gICAgICAvLyBVbmtub3duIGF0dHJpYnV0ZXMgc2hvdWxkIGhhdmUgbG93ZXJjYXNlIGNhc2luZyBzaW5jZSB0aGF0J3MgaG93IHRoZXlcbiAgICAgIC8vIHdpbGwgYmUgY2FzZWQgYW55d2F5IHdpdGggc2VydmVyIHJlbmRlcmluZy5cbiAgICAgIHdhcm5pbmckMShmYWxzZSwgJ1JlYWN0IGRvZXMgbm90IHJlY29nbml6ZSB0aGUgYCVzYCBwcm9wIG9uIGEgRE9NIGVsZW1lbnQuIElmIHlvdSAnICsgJ2ludGVudGlvbmFsbHkgd2FudCBpdCB0byBhcHBlYXIgaW4gdGhlIERPTSBhcyBhIGN1c3RvbSAnICsgJ2F0dHJpYnV0ZSwgc3BlbGwgaXQgYXMgbG93ZXJjYXNlIGAlc2AgaW5zdGVhZC4gJyArICdJZiB5b3UgYWNjaWRlbnRhbGx5IHBhc3NlZCBpdCBmcm9tIGEgcGFyZW50IGNvbXBvbmVudCwgcmVtb3ZlICcgKyAnaXQgZnJvbSB0aGUgRE9NIGVsZW1lbnQuJywgbmFtZSwgbG93ZXJDYXNlZE5hbWUpO1xuICAgICAgd2FybmVkUHJvcGVydGllcyQxW25hbWVdID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyAmJiBzaG91bGRSZW1vdmVBdHRyaWJ1dGVXaXRoV2FybmluZyhuYW1lLCB2YWx1ZSwgcHJvcGVydHlJbmZvLCBmYWxzZSkpIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdSZWNlaXZlZCBgJXNgIGZvciBhIG5vbi1ib29sZWFuIGF0dHJpYnV0ZSBgJXNgLlxcblxcbicgKyAnSWYgeW91IHdhbnQgdG8gd3JpdGUgaXQgdG8gdGhlIERPTSwgcGFzcyBhIHN0cmluZyBpbnN0ZWFkOiAnICsgJyVzPVwiJXNcIiBvciAlcz17dmFsdWUudG9TdHJpbmcoKX0uJywgdmFsdWUsIG5hbWUsIG5hbWUsIHZhbHVlLCBuYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm5pbmckMShmYWxzZSwgJ1JlY2VpdmVkIGAlc2AgZm9yIGEgbm9uLWJvb2xlYW4gYXR0cmlidXRlIGAlc2AuXFxuXFxuJyArICdJZiB5b3Ugd2FudCB0byB3cml0ZSBpdCB0byB0aGUgRE9NLCBwYXNzIGEgc3RyaW5nIGluc3RlYWQ6ICcgKyAnJXM9XCIlc1wiIG9yICVzPXt2YWx1ZS50b1N0cmluZygpfS5cXG5cXG4nICsgJ0lmIHlvdSB1c2VkIHRvIGNvbmRpdGlvbmFsbHkgb21pdCBpdCB3aXRoICVzPXtjb25kaXRpb24gJiYgdmFsdWV9LCAnICsgJ3Bhc3MgJXM9e2NvbmRpdGlvbiA/IHZhbHVlIDogdW5kZWZpbmVkfSBpbnN0ZWFkLicsIHZhbHVlLCBuYW1lLCBuYW1lLCB2YWx1ZSwgbmFtZSwgbmFtZSwgbmFtZSk7XG4gICAgICB9XG5cbiAgICAgIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IC8vIE5vdyB0aGF0IHdlJ3ZlIHZhbGlkYXRlZCBjYXNpbmcsIGRvIG5vdCB2YWxpZGF0ZVxuICAgIC8vIGRhdGEgdHlwZXMgZm9yIHJlc2VydmVkIHByb3BzXG5cblxuICAgIGlmIChpc1Jlc2VydmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IC8vIFdhcm4gd2hlbiBhIGtub3duIGF0dHJpYnV0ZSBpcyBhIGJhZCB0eXBlXG5cblxuICAgIGlmIChzaG91bGRSZW1vdmVBdHRyaWJ1dGVXaXRoV2FybmluZyhuYW1lLCB2YWx1ZSwgcHJvcGVydHlJbmZvLCBmYWxzZSkpIHtcbiAgICAgIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSA9IHRydWU7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBXYXJuIHdoZW4gcGFzc2luZyB0aGUgc3RyaW5ncyAnZmFsc2UnIG9yICd0cnVlJyBpbnRvIGEgYm9vbGVhbiBwcm9wXG5cblxuICAgIGlmICgodmFsdWUgPT09ICdmYWxzZScgfHwgdmFsdWUgPT09ICd0cnVlJykgJiYgcHJvcGVydHlJbmZvICE9PSBudWxsICYmIHByb3BlcnR5SW5mby50eXBlID09PSBCT09MRUFOKSB7XG4gICAgICB3YXJuaW5nJDEoZmFsc2UsICdSZWNlaXZlZCB0aGUgc3RyaW5nIGAlc2AgZm9yIHRoZSBib29sZWFuIGF0dHJpYnV0ZSBgJXNgLiAnICsgJyVzICcgKyAnRGlkIHlvdSBtZWFuICVzPXslc30/JywgdmFsdWUsIG5hbWUsIHZhbHVlID09PSAnZmFsc2UnID8gJ1RoZSBicm93c2VyIHdpbGwgaW50ZXJwcmV0IGl0IGFzIGEgdHJ1dGh5IHZhbHVlLicgOiAnQWx0aG91Z2ggdGhpcyB3b3JrcywgaXQgd2lsbCBub3Qgd29yayBhcyBleHBlY3RlZCBpZiB5b3UgcGFzcyB0aGUgc3RyaW5nIFwiZmFsc2VcIi4nLCBuYW1lLCB2YWx1ZSk7XG4gICAgICB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG59XG5cbnZhciB3YXJuVW5rbm93blByb3BlcnRpZXMgPSBmdW5jdGlvbiAodHlwZSwgcHJvcHMsIGNhblVzZUV2ZW50U3lzdGVtKSB7XG4gIHZhciB1bmtub3duUHJvcHMgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICB2YXIgaXNWYWxpZCA9IHZhbGlkYXRlUHJvcGVydHkkMSh0eXBlLCBrZXksIHByb3BzW2tleV0sIGNhblVzZUV2ZW50U3lzdGVtKTtcblxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgdW5rbm93blByb3BzLnB1c2goa2V5KTtcbiAgICB9XG4gIH1cblxuICB2YXIgdW5rbm93blByb3BTdHJpbmcgPSB1bmtub3duUHJvcHMubWFwKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgcmV0dXJuICdgJyArIHByb3AgKyAnYCc7XG4gIH0pLmpvaW4oJywgJyk7XG5cbiAgaWYgKHVua25vd25Qcm9wcy5sZW5ndGggPT09IDEpIHtcbiAgICB3YXJuaW5nJDEoZmFsc2UsICdJbnZhbGlkIHZhbHVlIGZvciBwcm9wICVzIG9uIDwlcz4gdGFnLiBFaXRoZXIgcmVtb3ZlIGl0IGZyb20gdGhlIGVsZW1lbnQsICcgKyAnb3IgcGFzcyBhIHN0cmluZyBvciBudW1iZXIgdmFsdWUgdG8ga2VlcCBpdCBpbiB0aGUgRE9NLiAnICsgJ0ZvciBkZXRhaWxzLCBzZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC1hdHRyaWJ1dGUtYmVoYXZpb3InLCB1bmtub3duUHJvcFN0cmluZywgdHlwZSk7XG4gIH0gZWxzZSBpZiAodW5rbm93blByb3BzLmxlbmd0aCA+IDEpIHtcbiAgICB3YXJuaW5nJDEoZmFsc2UsICdJbnZhbGlkIHZhbHVlcyBmb3IgcHJvcHMgJXMgb24gPCVzPiB0YWcuIEVpdGhlciByZW1vdmUgdGhlbSBmcm9tIHRoZSBlbGVtZW50LCAnICsgJ29yIHBhc3MgYSBzdHJpbmcgb3IgbnVtYmVyIHZhbHVlIHRvIGtlZXAgdGhlbSBpbiB0aGUgRE9NLiAnICsgJ0ZvciBkZXRhaWxzLCBzZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC1hdHRyaWJ1dGUtYmVoYXZpb3InLCB1bmtub3duUHJvcFN0cmluZywgdHlwZSk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcGVydGllcyQyKHR5cGUsIHByb3BzLCBjYW5Vc2VFdmVudFN5c3RlbSkge1xuICBpZiAoaXNDdXN0b21Db21wb25lbnQodHlwZSwgcHJvcHMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgd2FyblVua25vd25Qcm9wZXJ0aWVzKHR5cGUsIHByb3BzLCBjYW5Vc2VFdmVudFN5c3RlbSk7XG59XG5cbnZhciB0b0FycmF5ID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheTsgLy8gVGhpcyBpcyBvbmx5IHVzZWQgaW4gREVWLlxuLy8gRWFjaCBlbnRyeSBpcyBgdGhpcy5zdGFja2AgZnJvbSBhIGN1cnJlbnRseSBleGVjdXRpbmcgcmVuZGVyZXIgaW5zdGFuY2UuXG4vLyAoVGhlcmUgbWF5IGJlIG1vcmUgdGhhbiBvbmUgYmVjYXVzZSBSZWFjdERPTVNlcnZlciBpcyByZWVudHJhbnQpLlxuLy8gRWFjaCBzdGFjayBpcyBhbiBhcnJheSBvZiBmcmFtZXMgd2hpY2ggbWF5IGNvbnRhaW4gbmVzdGVkIHN0YWNrcyBvZiBlbGVtZW50cy5cblxudmFyIGN1cnJlbnREZWJ1Z1N0YWNrcyA9IFtdO1xudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG52YXIgcHJldkdldEN1cnJlbnRTdGFja0ltcGwgPSBudWxsO1xuXG52YXIgZ2V0Q3VycmVudFNlcnZlclN0YWNrSW1wbCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICcnO1xufTtcblxudmFyIGRlc2NyaWJlU3RhY2tGcmFtZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIHJldHVybiAnJztcbn07XG5cbnZhciB2YWxpZGF0ZVByb3BlcnRpZXNJbkRldmVsb3BtZW50ID0gZnVuY3Rpb24gKHR5cGUsIHByb3BzKSB7fTtcblxudmFyIHB1c2hDdXJyZW50RGVidWdTdGFjayA9IGZ1bmN0aW9uIChzdGFjaykge307XG5cbnZhciBwdXNoRWxlbWVudFRvRGVidWdTdGFjayA9IGZ1bmN0aW9uIChlbGVtZW50KSB7fTtcblxudmFyIHBvcEN1cnJlbnREZWJ1Z1N0YWNrID0gZnVuY3Rpb24gKCkge307XG5cbnZhciBoYXNXYXJuZWRBYm91dFVzaW5nQ29udGV4dEFzQ29uc3VtZXIgPSBmYWxzZTtcblxue1xuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuICB2YWxpZGF0ZVByb3BlcnRpZXNJbkRldmVsb3BtZW50ID0gZnVuY3Rpb24gKHR5cGUsIHByb3BzKSB7XG4gICAgdmFsaWRhdGVQcm9wZXJ0aWVzKHR5cGUsIHByb3BzKTtcbiAgICB2YWxpZGF0ZVByb3BlcnRpZXMkMSh0eXBlLCBwcm9wcyk7XG4gICAgdmFsaWRhdGVQcm9wZXJ0aWVzJDIodHlwZSwgcHJvcHMsXG4gICAgLyogY2FuVXNlRXZlbnRTeXN0ZW0gKi9cbiAgICBmYWxzZSk7XG4gIH07XG5cbiAgZGVzY3JpYmVTdGFja0ZyYW1lID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlO1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICB2YXIgb3duZXJOYW1lID0gbnVsbDtcbiAgICByZXR1cm4gZGVzY3JpYmVDb21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyTmFtZSk7XG4gIH07XG5cbiAgcHVzaEN1cnJlbnREZWJ1Z1N0YWNrID0gZnVuY3Rpb24gKHN0YWNrKSB7XG4gICAgY3VycmVudERlYnVnU3RhY2tzLnB1c2goc3RhY2spO1xuXG4gICAgaWYgKGN1cnJlbnREZWJ1Z1N0YWNrcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIC8vIFdlIGFyZSBlbnRlcmluZyBhIHNlcnZlciByZW5kZXJlci5cbiAgICAgIC8vIFJlbWVtYmVyIHRoZSBwcmV2aW91cyAoZS5nLiBjbGllbnQpIGdsb2JhbCBzdGFjayBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHByZXZHZXRDdXJyZW50U3RhY2tJbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2s7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjayA9IGdldEN1cnJlbnRTZXJ2ZXJTdGFja0ltcGw7XG4gICAgfVxuICB9O1xuXG4gIHB1c2hFbGVtZW50VG9EZWJ1Z1N0YWNrID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAvLyBGb3IgdGhlIGlubmVybW9zdCBleGVjdXRpbmcgUmVhY3RET01TZXJ2ZXIgY2FsbCxcbiAgICB2YXIgc3RhY2sgPSBjdXJyZW50RGVidWdTdGFja3NbY3VycmVudERlYnVnU3RhY2tzLmxlbmd0aCAtIDFdOyAvLyBUYWtlIHRoZSBpbm5lcm1vc3QgZXhlY3V0aW5nIGZyYW1lIChlLmcuIDxGb28+KSxcblxuICAgIHZhciBmcmFtZSA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdOyAvLyBhbmQgcmVjb3JkIHRoYXQgaXQgaGFzIG9uZSBtb3JlIGVsZW1lbnQgYXNzb2NpYXRlZCB3aXRoIGl0LlxuXG4gICAgZnJhbWUuZGVidWdFbGVtZW50U3RhY2sucHVzaChlbGVtZW50KTsgLy8gV2Ugb25seSBuZWVkIHRoaXMgYmVjYXVzZSB3ZSB0YWlsLW9wdGltaXplIHNpbmdsZS1lbGVtZW50XG4gICAgLy8gY2hpbGRyZW4gYW5kIGRpcmVjdGx5IGhhbmRsZSB0aGVtIGluIGFuIGlubmVyIGxvb3AgaW5zdGVhZCBvZlxuICAgIC8vIGNyZWF0aW5nIHNlcGFyYXRlIGZyYW1lcyBmb3IgdGhlbS5cbiAgfTtcblxuICBwb3BDdXJyZW50RGVidWdTdGFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICBjdXJyZW50RGVidWdTdGFja3MucG9wKCk7XG5cbiAgICBpZiAoY3VycmVudERlYnVnU3RhY2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gV2UgYXJlIGV4aXRpbmcgdGhlIHNlcnZlciByZW5kZXJlci5cbiAgICAgIC8vIFJlc3RvcmUgdGhlIHByZXZpb3VzIChlLmcuIGNsaWVudCkgZ2xvYmFsIHN0YWNrIGltcGxlbWVudGF0aW9uLlxuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2sgPSBwcmV2R2V0Q3VycmVudFN0YWNrSW1wbDtcbiAgICAgIHByZXZHZXRDdXJyZW50U3RhY2tJbXBsID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgZ2V0Q3VycmVudFNlcnZlclN0YWNrSW1wbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY3VycmVudERlYnVnU3RhY2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gTm90aGluZyBpcyBjdXJyZW50bHkgcmVuZGVyaW5nLlxuICAgICAgcmV0dXJuICcnO1xuICAgIH0gLy8gUmVhY3RET01TZXJ2ZXIgaXMgcmVlbnRyYW50IHNvIHRoZXJlIG1heSBiZSBtdWx0aXBsZSBjYWxscyBhdCB0aGUgc2FtZSB0aW1lLlxuICAgIC8vIFRha2UgdGhlIGZyYW1lcyBmcm9tIHRoZSBpbm5lcm1vc3QgY2FsbCB3aGljaCBpcyB0aGUgbGFzdCBpbiB0aGUgYXJyYXkuXG5cblxuICAgIHZhciBmcmFtZXMgPSBjdXJyZW50RGVidWdTdGFja3NbY3VycmVudERlYnVnU3RhY2tzLmxlbmd0aCAtIDFdO1xuICAgIHZhciBzdGFjayA9ICcnOyAvLyBHbyB0aHJvdWdoIGV2ZXJ5IGZyYW1lIGluIHRoZSBzdGFjayBmcm9tIHRoZSBpbm5lcm1vc3Qgb25lLlxuXG4gICAgZm9yICh2YXIgaSA9IGZyYW1lcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGZyYW1lID0gZnJhbWVzW2ldOyAvLyBFdmVyeSBmcmFtZSBtaWdodCBoYXZlIG1vcmUgdGhhbiBvbmUgZGVidWcgZWxlbWVudCBzdGFjayBlbnRyeSBhc3NvY2lhdGVkIHdpdGggaXQuXG4gICAgICAvLyBUaGlzIGlzIGJlY2F1c2Ugc2luZ2xlLWNoaWxkIG5lc3RpbmcgZG9lc24ndCBjcmVhdGUgbWF0ZXJpYWxpemVkIGZyYW1lcy5cbiAgICAgIC8vIEluc3RlYWQgaXQgd291bGQgcHVzaCB0aGVtIHRocm91Z2ggYHB1c2hFbGVtZW50VG9EZWJ1Z1N0YWNrKClgLlxuXG4gICAgICB2YXIgZGVidWdFbGVtZW50U3RhY2sgPSBmcmFtZS5kZWJ1Z0VsZW1lbnRTdGFjaztcblxuICAgICAgZm9yICh2YXIgaWkgPSBkZWJ1Z0VsZW1lbnRTdGFjay5sZW5ndGggLSAxOyBpaSA+PSAwOyBpaS0tKSB7XG4gICAgICAgIHN0YWNrICs9IGRlc2NyaWJlU3RhY2tGcmFtZShkZWJ1Z0VsZW1lbnRTdGFja1tpaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGFjaztcbiAgfTtcbn1cblxudmFyIGRpZFdhcm5EZWZhdWx0SW5wdXRWYWx1ZSA9IGZhbHNlO1xudmFyIGRpZFdhcm5EZWZhdWx0Q2hlY2tlZCA9IGZhbHNlO1xudmFyIGRpZFdhcm5EZWZhdWx0U2VsZWN0VmFsdWUgPSBmYWxzZTtcbnZhciBkaWRXYXJuRGVmYXVsdFRleHRhcmVhVmFsdWUgPSBmYWxzZTtcbnZhciBkaWRXYXJuSW52YWxpZE9wdGlvbkNoaWxkcmVuID0gZmFsc2U7XG52YXIgZGlkV2FybkFib3V0Tm9vcFVwZGF0ZUZvckNvbXBvbmVudCA9IHt9O1xudmFyIGRpZFdhcm5BYm91dEJhZENsYXNzID0ge307XG52YXIgZGlkV2FybkFib3V0TW9kdWxlUGF0dGVybkNvbXBvbmVudCA9IHt9O1xudmFyIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRXaWxsTW91bnQgPSB7fTtcbnZhciBkaWRXYXJuQWJvdXRVbmRlZmluZWREZXJpdmVkU3RhdGUgPSB7fTtcbnZhciBkaWRXYXJuQWJvdXRVbmluaXRpYWxpemVkU3RhdGUgPSB7fTtcbnZhciB2YWx1ZVByb3BOYW1lcyA9IFsndmFsdWUnLCAnZGVmYXVsdFZhbHVlJ107XG52YXIgbmV3bGluZUVhdGluZ1RhZ3MgPSB7XG4gIGxpc3Rpbmc6IHRydWUsXG4gIHByZTogdHJ1ZSxcbiAgdGV4dGFyZWE6IHRydWVcbn07IC8vIFdlIGFjY2VwdCBhbnkgdGFnIHRvIGJlIHJlbmRlcmVkIGJ1dCBzaW5jZSB0aGlzIGdldHMgaW5qZWN0ZWQgaW50byBhcmJpdHJhcnlcbi8vIEhUTUwsIHdlIHdhbnQgdG8gbWFrZSBzdXJlIHRoYXQgaXQncyBhIHNhZmUgdGFnLlxuLy8gaHR0cDovL3d3dy53My5vcmcvVFIvUkVDLXhtbC8jTlQtTmFtZVxuXG52YXIgVkFMSURfVEFHX1JFR0VYID0gL15bYS16QS1aXVthLXpBLVo6X1xcLlxcLVxcZF0qJC87IC8vIFNpbXBsaWZpZWQgc3Vic2V0XG5cbnZhciB2YWxpZGF0ZWRUYWdDYWNoZSA9IHt9O1xuXG5mdW5jdGlvbiB2YWxpZGF0ZURhbmdlcm91c1RhZyh0YWcpIHtcbiAgaWYgKCF2YWxpZGF0ZWRUYWdDYWNoZS5oYXNPd25Qcm9wZXJ0eSh0YWcpKSB7XG4gICAgaWYgKCFWQUxJRF9UQUdfUkVHRVgudGVzdCh0YWcpKSB7XG4gICAgICB7XG4gICAgICAgIHRocm93IEVycm9yKFwiSW52YWxpZCB0YWc6IFwiICsgdGFnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YWxpZGF0ZWRUYWdDYWNoZVt0YWddID0gdHJ1ZTtcbiAgfVxufVxuXG52YXIgc3R5bGVOYW1lQ2FjaGUgPSB7fTtcblxudmFyIHByb2Nlc3NTdHlsZU5hbWUgPSBmdW5jdGlvbiAoc3R5bGVOYW1lKSB7XG4gIGlmIChzdHlsZU5hbWVDYWNoZS5oYXNPd25Qcm9wZXJ0eShzdHlsZU5hbWUpKSB7XG4gICAgcmV0dXJuIHN0eWxlTmFtZUNhY2hlW3N0eWxlTmFtZV07XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gaHlwaGVuYXRlU3R5bGVOYW1lKHN0eWxlTmFtZSk7XG4gIHN0eWxlTmFtZUNhY2hlW3N0eWxlTmFtZV0gPSByZXN1bHQ7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVNYXJrdXBGb3JTdHlsZXMoc3R5bGVzKSB7XG4gIHZhciBzZXJpYWxpemVkID0gJyc7XG4gIHZhciBkZWxpbWl0ZXIgPSAnJztcblxuICBmb3IgKHZhciBzdHlsZU5hbWUgaW4gc3R5bGVzKSB7XG4gICAgaWYgKCFzdHlsZXMuaGFzT3duUHJvcGVydHkoc3R5bGVOYW1lKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIGlzQ3VzdG9tUHJvcGVydHkgPSBzdHlsZU5hbWUuaW5kZXhPZignLS0nKSA9PT0gMDtcbiAgICB2YXIgc3R5bGVWYWx1ZSA9IHN0eWxlc1tzdHlsZU5hbWVdO1xuXG4gICAge1xuICAgICAgaWYgKCFpc0N1c3RvbVByb3BlcnR5KSB7XG4gICAgICAgIHdhcm5WYWxpZFN0eWxlJDEoc3R5bGVOYW1lLCBzdHlsZVZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3R5bGVWYWx1ZSAhPSBudWxsKSB7XG4gICAgICBzZXJpYWxpemVkICs9IGRlbGltaXRlciArIChpc0N1c3RvbVByb3BlcnR5ID8gc3R5bGVOYW1lIDogcHJvY2Vzc1N0eWxlTmFtZShzdHlsZU5hbWUpKSArICc6JztcbiAgICAgIHNlcmlhbGl6ZWQgKz0gZGFuZ2Vyb3VzU3R5bGVWYWx1ZShzdHlsZU5hbWUsIHN0eWxlVmFsdWUsIGlzQ3VzdG9tUHJvcGVydHkpO1xuICAgICAgZGVsaW1pdGVyID0gJzsnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzZXJpYWxpemVkIHx8IG51bGw7XG59XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgZ2V0Q29tcG9uZW50TmFtZShfY29uc3RydWN0b3IpIHx8ICdSZWFjdENsYXNzJztcbiAgICB2YXIgd2FybmluZ0tleSA9IGNvbXBvbmVudE5hbWUgKyAnLicgKyBjYWxsZXJOYW1lO1xuXG4gICAgaWYgKGRpZFdhcm5BYm91dE5vb3BVcGRhdGVGb3JDb21wb25lbnRbd2FybmluZ0tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICclcyguLi4pOiBDYW4gb25seSB1cGRhdGUgYSBtb3VudGluZyBjb21wb25lbnQuICcgKyAnVGhpcyB1c3VhbGx5IG1lYW5zIHlvdSBjYWxsZWQgJXMoKSBvdXRzaWRlIGNvbXBvbmVudFdpbGxNb3VudCgpIG9uIHRoZSBzZXJ2ZXIuICcgKyAnVGhpcyBpcyBhIG5vLW9wLlxcblxcblBsZWFzZSBjaGVjayB0aGUgY29kZSBmb3IgdGhlICVzIGNvbXBvbmVudC4nLCBjYWxsZXJOYW1lLCBjYWxsZXJOYW1lLCBjb21wb25lbnROYW1lKTtcbiAgICBkaWRXYXJuQWJvdXROb29wVXBkYXRlRm9yQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHJldHVybiBDb21wb25lbnQucHJvdG90eXBlICYmIENvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudDtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uQ2hpbGRyZW5Jbm5lck1hcmt1cChwcm9wcykge1xuICB2YXIgaW5uZXJIVE1MID0gcHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw7XG5cbiAgaWYgKGlubmVySFRNTCAhPSBudWxsKSB7XG4gICAgaWYgKGlubmVySFRNTC5fX2h0bWwgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGlubmVySFRNTC5fX2h0bWw7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBjb250ZW50ID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjb250ZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIGVzY2FwZVRleHRGb3JCcm93c2VyKGNvbnRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuVG9wTGV2ZWxDaGlsZHJlbihjaGlsZHJlbikge1xuICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSkge1xuICAgIHJldHVybiB0b0FycmF5KGNoaWxkcmVuKTtcbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY2hpbGRyZW47XG5cbiAgaWYgKGVsZW1lbnQudHlwZSAhPT0gUkVBQ1RfRlJBR01FTlRfVFlQRSkge1xuICAgIHJldHVybiBbZWxlbWVudF07XG4gIH1cblxuICB2YXIgZnJhZ21lbnRDaGlsZHJlbiA9IGVsZW1lbnQucHJvcHMuY2hpbGRyZW47XG5cbiAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChmcmFnbWVudENoaWxkcmVuKSkge1xuICAgIHJldHVybiB0b0FycmF5KGZyYWdtZW50Q2hpbGRyZW4pO1xuICB9XG5cbiAgdmFyIGZyYWdtZW50Q2hpbGRFbGVtZW50ID0gZnJhZ21lbnRDaGlsZHJlbjtcbiAgcmV0dXJuIFtmcmFnbWVudENoaWxkRWxlbWVudF07XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5PcHRpb25DaGlsZHJlbihjaGlsZHJlbikge1xuICBpZiAoY2hpbGRyZW4gPT09IHVuZGVmaW5lZCB8fCBjaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIHZhciBjb250ZW50ID0gJyc7IC8vIEZsYXR0ZW4gY2hpbGRyZW4gYW5kIHdhcm4gaWYgdGhleSBhcmVuJ3Qgc3RyaW5ncyBvciBudW1iZXJzO1xuICAvLyBpbnZhbGlkIHR5cGVzIGFyZSBpZ25vcmVkLlxuXG4gIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmIChjaGlsZCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29udGVudCArPSBjaGlsZDtcblxuICAgIHtcbiAgICAgIGlmICghZGlkV2FybkludmFsaWRPcHRpb25DaGlsZHJlbiAmJiB0eXBlb2YgY2hpbGQgIT09ICdzdHJpbmcnICYmIHR5cGVvZiBjaGlsZCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgZGlkV2FybkludmFsaWRPcHRpb25DaGlsZHJlbiA9IHRydWU7XG4gICAgICAgIHdhcm5pbmckMShmYWxzZSwgJ09ubHkgc3RyaW5ncyBhbmQgbnVtYmVycyBhcmUgc3VwcG9ydGVkIGFzIDxvcHRpb24+IGNoaWxkcmVuLicpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBjb250ZW50O1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFNUWUxFID0gJ3N0eWxlJztcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAgY2hpbGRyZW46IG51bGwsXG4gIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiBudWxsLFxuICBzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmc6IG51bGwsXG4gIHN1cHByZXNzSHlkcmF0aW9uV2FybmluZzogbnVsbFxufTtcblxuZnVuY3Rpb24gY3JlYXRlT3BlblRhZ01hcmt1cCh0YWdWZXJiYXRpbSwgdGFnTG93ZXJjYXNlLCBwcm9wcywgbmFtZXNwYWNlLCBtYWtlU3RhdGljTWFya3VwLCBpc1Jvb3RFbGVtZW50KSB7XG4gIHZhciByZXQgPSAnPCcgKyB0YWdWZXJiYXRpbTtcblxuICBmb3IgKHZhciBwcm9wS2V5IGluIHByb3BzKSB7XG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCBwcm9wS2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGVuYWJsZUZsYXJlQVBJICYmIHByb3BLZXkgPT09ICdsaXN0ZW5lcnMnKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcEtleV07XG5cbiAgICBpZiAocHJvcFZhbHVlID09IG51bGwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChwcm9wS2V5ID09PSBTVFlMRSkge1xuICAgICAgcHJvcFZhbHVlID0gY3JlYXRlTWFya3VwRm9yU3R5bGVzKHByb3BWYWx1ZSk7XG4gICAgfVxuXG4gICAgdmFyIG1hcmt1cCA9IG51bGw7XG5cbiAgICBpZiAoaXNDdXN0b21Db21wb25lbnQodGFnTG93ZXJjYXNlLCBwcm9wcykpIHtcbiAgICAgIGlmICghUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcEtleSkpIHtcbiAgICAgICAgbWFya3VwID0gY3JlYXRlTWFya3VwRm9yQ3VzdG9tQXR0cmlidXRlKHByb3BLZXksIHByb3BWYWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hcmt1cCA9IGNyZWF0ZU1hcmt1cEZvclByb3BlcnR5KHByb3BLZXksIHByb3BWYWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKG1hcmt1cCkge1xuICAgICAgcmV0ICs9ICcgJyArIG1hcmt1cDtcbiAgICB9XG4gIH0gLy8gRm9yIHN0YXRpYyBwYWdlcywgbm8gbmVlZCB0byBwdXQgUmVhY3QgSUQgYW5kIGNoZWNrc3VtLiBTYXZlcyBsb3RzIG9mXG4gIC8vIGJ5dGVzLlxuXG5cbiAgaWYgKG1ha2VTdGF0aWNNYXJrdXApIHtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgaWYgKGlzUm9vdEVsZW1lbnQpIHtcbiAgICByZXQgKz0gJyAnICsgY3JlYXRlTWFya3VwRm9yUm9vdCgpO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVSZW5kZXJSZXN1bHQoY2hpbGQsIHR5cGUpIHtcbiAgaWYgKGNoaWxkID09PSB1bmRlZmluZWQpIHtcbiAgICB7XG4gICAgICB7XG4gICAgICAgIHRocm93IEVycm9yKChnZXRDb21wb25lbnROYW1lKHR5cGUpIHx8ICdDb21wb25lbnQnKSArIFwiKC4uLik6IE5vdGhpbmcgd2FzIHJldHVybmVkIGZyb20gcmVuZGVyLiBUaGlzIHVzdWFsbHkgbWVhbnMgYSByZXR1cm4gc3RhdGVtZW50IGlzIG1pc3NpbmcuIE9yLCB0byByZW5kZXIgbm90aGluZywgcmV0dXJuIG51bGwuXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlKGNoaWxkLCBjb250ZXh0LCB0aHJlYWRJRCkge1xuICB3aGlsZSAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgLy8gU2FmZSBiZWNhdXNlIHdlIGp1c3QgY2hlY2tlZCBpdCdzIGFuIGVsZW1lbnQuXG4gICAgdmFyIGVsZW1lbnQgPSBjaGlsZDtcbiAgICB2YXIgQ29tcG9uZW50ID0gZWxlbWVudC50eXBlO1xuXG4gICAge1xuICAgICAgcHVzaEVsZW1lbnRUb0RlYnVnU3RhY2soZWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBDb21wb25lbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHByb2Nlc3NDaGlsZChlbGVtZW50LCBDb21wb25lbnQpO1xuICB9IC8vIEV4dHJhIGNsb3N1cmUgc28gcXVldWUgYW5kIHJlcGxhY2UgY2FuIGJlIGNhcHR1cmVkIHByb3Blcmx5XG5cblxuICBmdW5jdGlvbiBwcm9jZXNzQ2hpbGQoZWxlbWVudCwgQ29tcG9uZW50KSB7XG4gICAgdmFyIGlzQ2xhc3MgPSBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KTtcbiAgICB2YXIgcHVibGljQ29udGV4dCA9IHByb2Nlc3NDb250ZXh0KENvbXBvbmVudCwgY29udGV4dCwgdGhyZWFkSUQsIGlzQ2xhc3MpO1xuICAgIHZhciBxdWV1ZSA9IFtdO1xuICAgIHZhciByZXBsYWNlID0gZmFsc2U7XG4gICAgdmFyIHVwZGF0ZXIgPSB7XG4gICAgICBpc01vdW50ZWQ6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9LFxuICAgICAgZW5xdWV1ZUZvcmNlVXBkYXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICAgICAgaWYgKHF1ZXVlID09PSBudWxsKSB7XG4gICAgICAgICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdmb3JjZVVwZGF0ZScpO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlKSB7XG4gICAgICAgIHJlcGxhY2UgPSB0cnVlO1xuICAgICAgICBxdWV1ZSA9IFtjb21wbGV0ZVN0YXRlXTtcbiAgICAgIH0sXG4gICAgICBlbnF1ZXVlU2V0U3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY3VycmVudFBhcnRpYWxTdGF0ZSkge1xuICAgICAgICBpZiAocXVldWUgPT09IG51bGwpIHtcbiAgICAgICAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3NldFN0YXRlJyk7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBxdWV1ZS5wdXNoKGN1cnJlbnRQYXJ0aWFsU3RhdGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgdmFyIGluc3Q7XG5cbiAgICBpZiAoaXNDbGFzcykge1xuICAgICAgaW5zdCA9IG5ldyBDb21wb25lbnQoZWxlbWVudC5wcm9wcywgcHVibGljQ29udGV4dCwgdXBkYXRlcik7XG5cbiAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB7XG4gICAgICAgICAgaWYgKGluc3Quc3RhdGUgPT09IG51bGwgfHwgaW5zdC5zdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWUoQ29tcG9uZW50KSB8fCAnVW5rbm93bic7XG5cbiAgICAgICAgICAgIGlmICghZGlkV2FybkFib3V0VW5pbml0aWFsaXplZFN0YXRlW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgICAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ2Alc2AgdXNlcyBgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzYCBidXQgaXRzIGluaXRpYWwgc3RhdGUgaXMgJyArICclcy4gVGhpcyBpcyBub3QgcmVjb21tZW5kZWQuIEluc3RlYWQsIGRlZmluZSB0aGUgaW5pdGlhbCBzdGF0ZSBieSAnICsgJ2Fzc2lnbmluZyBhbiBvYmplY3QgdG8gYHRoaXMuc3RhdGVgIGluIHRoZSBjb25zdHJ1Y3RvciBvZiBgJXNgLiAnICsgJ1RoaXMgZW5zdXJlcyB0aGF0IGBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNgIGFyZ3VtZW50cyBoYXZlIGEgY29uc2lzdGVudCBzaGFwZS4nLCBjb21wb25lbnROYW1lLCBpbnN0LnN0YXRlID09PSBudWxsID8gJ251bGwnIDogJ3VuZGVmaW5lZCcsIGNvbXBvbmVudE5hbWUpO1xuICAgICAgICAgICAgICBkaWRXYXJuQWJvdXRVbmluaXRpYWxpemVkU3RhdGVbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwYXJ0aWFsU3RhdGUgPSBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzLmNhbGwobnVsbCwgZWxlbWVudC5wcm9wcywgaW5zdC5zdGF0ZSk7XG5cbiAgICAgICAge1xuICAgICAgICAgIGlmIChwYXJ0aWFsU3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIF9jb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShDb21wb25lbnQpIHx8ICdVbmtub3duJztcblxuICAgICAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRVbmRlZmluZWREZXJpdmVkU3RhdGVbX2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgICAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJyVzLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcygpOiBBIHZhbGlkIHN0YXRlIG9iamVjdCAob3IgbnVsbCkgbXVzdCBiZSByZXR1cm5lZC4gJyArICdZb3UgaGF2ZSByZXR1cm5lZCB1bmRlZmluZWQuJywgX2NvbXBvbmVudE5hbWUpO1xuICAgICAgICAgICAgICBkaWRXYXJuQWJvdXRVbmRlZmluZWREZXJpdmVkU3RhdGVbX2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFydGlhbFN0YXRlICE9IG51bGwpIHtcbiAgICAgICAgICBpbnN0LnN0YXRlID0gX2Fzc2lnbih7fSwgaW5zdC5zdGF0ZSwgcGFydGlhbFN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB7XG4gICAgICAgIGlmIChDb21wb25lbnQucHJvdG90eXBlICYmIHR5cGVvZiBDb21wb25lbnQucHJvdG90eXBlLnJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhciBfY29tcG9uZW50TmFtZTIgPSBnZXRDb21wb25lbnROYW1lKENvbXBvbmVudCkgfHwgJ1Vua25vd24nO1xuXG4gICAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRCYWRDbGFzc1tfY29tcG9uZW50TmFtZTJdKSB7XG4gICAgICAgICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsIFwiVGhlIDwlcyAvPiBjb21wb25lbnQgYXBwZWFycyB0byBoYXZlIGEgcmVuZGVyIG1ldGhvZCwgYnV0IGRvZXNuJ3QgZXh0ZW5kIFJlYWN0LkNvbXBvbmVudC4gXCIgKyAnVGhpcyBpcyBsaWtlbHkgdG8gY2F1c2UgZXJyb3JzLiBDaGFuZ2UgJXMgdG8gZXh0ZW5kIFJlYWN0LkNvbXBvbmVudCBpbnN0ZWFkLicsIF9jb21wb25lbnROYW1lMiwgX2NvbXBvbmVudE5hbWUyKTtcbiAgICAgICAgICAgIGRpZFdhcm5BYm91dEJhZENsYXNzW19jb21wb25lbnROYW1lMl0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgY29tcG9uZW50SWRlbnRpdHkgPSB7fTtcbiAgICAgIHByZXBhcmVUb1VzZUhvb2tzKGNvbXBvbmVudElkZW50aXR5KTtcbiAgICAgIGluc3QgPSBDb21wb25lbnQoZWxlbWVudC5wcm9wcywgcHVibGljQ29udGV4dCwgdXBkYXRlcik7XG4gICAgICBpbnN0ID0gZmluaXNoSG9va3MoQ29tcG9uZW50LCBlbGVtZW50LnByb3BzLCBpbnN0LCBwdWJsaWNDb250ZXh0KTtcblxuICAgICAgaWYgKGluc3QgPT0gbnVsbCB8fCBpbnN0LnJlbmRlciA9PSBudWxsKSB7XG4gICAgICAgIGNoaWxkID0gaW5zdDtcbiAgICAgICAgdmFsaWRhdGVSZW5kZXJSZXN1bHQoY2hpbGQsIENvbXBvbmVudCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAge1xuICAgICAgICB2YXIgX2NvbXBvbmVudE5hbWUzID0gZ2V0Q29tcG9uZW50TmFtZShDb21wb25lbnQpIHx8ICdVbmtub3duJztcblxuICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1vZHVsZVBhdHRlcm5Db21wb25lbnRbX2NvbXBvbmVudE5hbWUzXSkge1xuICAgICAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ1RoZSA8JXMgLz4gY29tcG9uZW50IGFwcGVhcnMgdG8gYmUgYSBmdW5jdGlvbiBjb21wb25lbnQgdGhhdCByZXR1cm5zIGEgY2xhc3MgaW5zdGFuY2UuICcgKyAnQ2hhbmdlICVzIHRvIGEgY2xhc3MgdGhhdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCBpbnN0ZWFkLiAnICsgXCJJZiB5b3UgY2FuJ3QgdXNlIGEgY2xhc3MgdHJ5IGFzc2lnbmluZyB0aGUgcHJvdG90eXBlIG9uIHRoZSBmdW5jdGlvbiBhcyBhIHdvcmthcm91bmQuIFwiICsgXCJgJXMucHJvdG90eXBlID0gUmVhY3QuQ29tcG9uZW50LnByb3RvdHlwZWAuIERvbid0IHVzZSBhbiBhcnJvdyBmdW5jdGlvbiBzaW5jZSBpdCBcIiArICdjYW5ub3QgYmUgY2FsbGVkIHdpdGggYG5ld2AgYnkgUmVhY3QuJywgX2NvbXBvbmVudE5hbWUzLCBfY29tcG9uZW50TmFtZTMsIF9jb21wb25lbnROYW1lMyk7XG4gICAgICAgICAgZGlkV2FybkFib3V0TW9kdWxlUGF0dGVybkNvbXBvbmVudFtfY29tcG9uZW50TmFtZTNdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGluc3QucHJvcHMgPSBlbGVtZW50LnByb3BzO1xuICAgIGluc3QuY29udGV4dCA9IHB1YmxpY0NvbnRleHQ7XG4gICAgaW5zdC51cGRhdGVyID0gdXBkYXRlcjtcbiAgICB2YXIgaW5pdGlhbFN0YXRlID0gaW5zdC5zdGF0ZTtcblxuICAgIGlmIChpbml0aWFsU3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaW5zdC5zdGF0ZSA9IGluaXRpYWxTdGF0ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBpbnN0LlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQgPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGluc3QuY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIGluc3QuY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAod2FybkFib3V0RGVwcmVjYXRlZExpZmVjeWNsZXMgJiYgaW5zdC5jb21wb25lbnRXaWxsTW91bnQuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdmFyIF9jb21wb25lbnROYW1lNCA9IGdldENvbXBvbmVudE5hbWUoQ29tcG9uZW50KSB8fCAnVW5rbm93bic7XG5cbiAgICAgICAgICAgIGlmICghZGlkV2FybkFib3V0RGVwcmVjYXRlZFdpbGxNb3VudFtfY29tcG9uZW50TmFtZTRdKSB7XG4gICAgICAgICAgICAgIGxvd1ByaW9yaXR5V2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAvLyBrZWVwIHRoaXMgd2FybmluZyBpbiBzeW5jIHdpdGggUmVhY3RTdHJpY3RNb2RlV2FybmluZy5qc1xuICAgICAgICAgICAgICAnY29tcG9uZW50V2lsbE1vdW50IGhhcyBiZWVuIHJlbmFtZWQsIGFuZCBpcyBub3QgcmVjb21tZW5kZWQgZm9yIHVzZS4gJyArICdTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC11bnNhZmUtY29tcG9uZW50LWxpZmVjeWNsZXMgZm9yIGRldGFpbHMuXFxuXFxuJyArICcqIE1vdmUgY29kZSBmcm9tIGNvbXBvbmVudFdpbGxNb3VudCB0byBjb21wb25lbnREaWRNb3VudCAocHJlZmVycmVkIGluIG1vc3QgY2FzZXMpICcgKyAnb3IgdGhlIGNvbnN0cnVjdG9yLlxcbicgKyAnXFxuUGxlYXNlIHVwZGF0ZSB0aGUgZm9sbG93aW5nIGNvbXBvbmVudHM6ICVzJywgX2NvbXBvbmVudE5hbWU0KTtcbiAgICAgICAgICAgICAgZGlkV2FybkFib3V0RGVwcmVjYXRlZFdpbGxNb3VudFtfY29tcG9uZW50TmFtZTRdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gSW4gb3JkZXIgdG8gc3VwcG9ydCByZWFjdC1saWZlY3ljbGVzLWNvbXBhdCBwb2x5ZmlsbGVkIGNvbXBvbmVudHMsXG4gICAgICAgIC8vIFVuc2FmZSBsaWZlY3ljbGVzIHNob3VsZCBub3QgYmUgaW52b2tlZCBmb3IgYW55IGNvbXBvbmVudCB3aXRoIHRoZSBuZXcgZ0RTRlAuXG5cblxuICAgICAgICBpZiAodHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBpbnN0LmNvbXBvbmVudFdpbGxNb3VudCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaW5zdC5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIEluIG9yZGVyIHRvIHN1cHBvcnQgcmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQgcG9seWZpbGxlZCBjb21wb25lbnRzLFxuICAgICAgICAvLyBVbnNhZmUgbGlmZWN5Y2xlcyBzaG91bGQgbm90IGJlIGludm9rZWQgZm9yIGFueSBjb21wb25lbnQgd2l0aCB0aGUgbmV3IGdEU0ZQLlxuICAgICAgICBpbnN0LlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICB2YXIgb2xkUXVldWUgPSBxdWV1ZTtcbiAgICAgICAgdmFyIG9sZFJlcGxhY2UgPSByZXBsYWNlO1xuICAgICAgICBxdWV1ZSA9IG51bGw7XG4gICAgICAgIHJlcGxhY2UgPSBmYWxzZTtcblxuICAgICAgICBpZiAob2xkUmVwbGFjZSAmJiBvbGRRdWV1ZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICBpbnN0LnN0YXRlID0gb2xkUXVldWVbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG5leHRTdGF0ZSA9IG9sZFJlcGxhY2UgPyBvbGRRdWV1ZVswXSA6IGluc3Quc3RhdGU7XG4gICAgICAgICAgdmFyIGRvbnRNdXRhdGUgPSB0cnVlO1xuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IG9sZFJlcGxhY2UgPyAxIDogMDsgaSA8IG9sZFF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFydGlhbCA9IG9sZFF1ZXVlW2ldO1xuXG4gICAgICAgICAgICB2YXIgX3BhcnRpYWxTdGF0ZSA9IHR5cGVvZiBwYXJ0aWFsID09PSAnZnVuY3Rpb24nID8gcGFydGlhbC5jYWxsKGluc3QsIG5leHRTdGF0ZSwgZWxlbWVudC5wcm9wcywgcHVibGljQ29udGV4dCkgOiBwYXJ0aWFsO1xuXG4gICAgICAgICAgICBpZiAoX3BhcnRpYWxTdGF0ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIGlmIChkb250TXV0YXRlKSB7XG4gICAgICAgICAgICAgICAgZG9udE11dGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG5leHRTdGF0ZSA9IF9hc3NpZ24oe30sIG5leHRTdGF0ZSwgX3BhcnRpYWxTdGF0ZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX2Fzc2lnbihuZXh0U3RhdGUsIF9wYXJ0aWFsU3RhdGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5zdC5zdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNoaWxkID0gaW5zdC5yZW5kZXIoKTtcblxuICAgIHtcbiAgICAgIGlmIChjaGlsZCA9PT0gdW5kZWZpbmVkICYmIGluc3QucmVuZGVyLl9pc01vY2tGdW5jdGlvbikge1xuICAgICAgICAvLyBUaGlzIGlzIHByb2JhYmx5IGJhZCBwcmFjdGljZS4gQ29uc2lkZXIgd2FybmluZyBoZXJlIGFuZFxuICAgICAgICAvLyBkZXByZWNhdGluZyB0aGlzIGNvbnZlbmllbmNlLlxuICAgICAgICBjaGlsZCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFsaWRhdGVSZW5kZXJSZXN1bHQoY2hpbGQsIENvbXBvbmVudCk7XG4gICAgdmFyIGNoaWxkQ29udGV4dDtcblxuICAgIGlmIChkaXNhYmxlTGVnYWN5Q29udGV4dCkge1xuICAgICAge1xuICAgICAgICB2YXIgY2hpbGRDb250ZXh0VHlwZXMgPSBDb21wb25lbnQuY2hpbGRDb250ZXh0VHlwZXM7XG5cbiAgICAgICAgaWYgKGNoaWxkQ29udGV4dFR5cGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICclcyB1c2VzIHRoZSBsZWdhY3kgY2hpbGRDb250ZXh0VHlwZXMgQVBJIHdoaWNoIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQuICcgKyAnVXNlIFJlYWN0LmNyZWF0ZUNvbnRleHQoKSBpbnN0ZWFkLicsIGdldENvbXBvbmVudE5hbWUoQ29tcG9uZW50KSB8fCAnVW5rbm93bicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgaW5zdC5nZXRDaGlsZENvbnRleHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIF9jaGlsZENvbnRleHRUeXBlcyA9IENvbXBvbmVudC5jaGlsZENvbnRleHRUeXBlcztcblxuICAgICAgICBpZiAodHlwZW9mIF9jaGlsZENvbnRleHRUeXBlcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSBpbnN0LmdldENoaWxkQ29udGV4dCgpO1xuXG4gICAgICAgICAgZm9yICh2YXIgY29udGV4dEtleSBpbiBjaGlsZENvbnRleHQpIHtcbiAgICAgICAgICAgIGlmICghKGNvbnRleHRLZXkgaW4gX2NoaWxkQ29udGV4dFR5cGVzKSkge1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoKGdldENvbXBvbmVudE5hbWUoQ29tcG9uZW50KSB8fCAnVW5rbm93bicpICsgXCIuZ2V0Q2hpbGRDb250ZXh0KCk6IGtleSBcXFwiXCIgKyBjb250ZXh0S2V5ICsgXCJcXFwiIGlzIG5vdCBkZWZpbmVkIGluIGNoaWxkQ29udGV4dFR5cGVzLlwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICclcy5nZXRDaGlsZENvbnRleHQoKTogY2hpbGRDb250ZXh0VHlwZXMgbXVzdCBiZSBkZWZpbmVkIGluIG9yZGVyIHRvICcgKyAndXNlIGdldENoaWxkQ29udGV4dCgpLicsIGdldENvbXBvbmVudE5hbWUoQ29tcG9uZW50KSB8fCAnVW5rbm93bicpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZENvbnRleHQpIHtcbiAgICAgICAgY29udGV4dCA9IF9hc3NpZ24oe30sIGNvbnRleHQsIGNoaWxkQ29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjaGlsZDogY2hpbGQsXG4gICAgY29udGV4dDogY29udGV4dFxuICB9O1xufVxuXG52YXIgUmVhY3RET01TZXJ2ZXJSZW5kZXJlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIC8vIFRPRE86IHR5cGUgdGhpcyBtb3JlIHN0cmljdGx5OlxuICAvLyBERVYtb25seVxuICBmdW5jdGlvbiBSZWFjdERPTVNlcnZlclJlbmRlcmVyKGNoaWxkcmVuLCBtYWtlU3RhdGljTWFya3VwKSB7XG4gICAgdmFyIGZsYXRDaGlsZHJlbiA9IGZsYXR0ZW5Ub3BMZXZlbENoaWxkcmVuKGNoaWxkcmVuKTtcbiAgICB2YXIgdG9wRnJhbWUgPSB7XG4gICAgICB0eXBlOiBudWxsLFxuICAgICAgLy8gQXNzdW1lIGFsbCB0cmVlcyBzdGFydCBpbiB0aGUgSFRNTCBuYW1lc3BhY2UgKG5vdCB0b3RhbGx5IHRydWUsIGJ1dFxuICAgICAgLy8gdGhpcyBpcyB3aGF0IHdlIGRpZCBoaXN0b3JpY2FsbHkpXG4gICAgICBkb21OYW1lc3BhY2U6IE5hbWVzcGFjZXMuaHRtbCxcbiAgICAgIGNoaWxkcmVuOiBmbGF0Q2hpbGRyZW4sXG4gICAgICBjaGlsZEluZGV4OiAwLFxuICAgICAgY29udGV4dDogZW1wdHlPYmplY3QsXG4gICAgICBmb290ZXI6ICcnXG4gICAgfTtcblxuICAgIHtcbiAgICAgIHRvcEZyYW1lLmRlYnVnRWxlbWVudFN0YWNrID0gW107XG4gICAgfVxuXG4gICAgdGhpcy50aHJlYWRJRCA9IGFsbG9jVGhyZWFkSUQoKTtcbiAgICB0aGlzLnN0YWNrID0gW3RvcEZyYW1lXTtcbiAgICB0aGlzLmV4aGF1c3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuY3VycmVudFNlbGVjdFZhbHVlID0gbnVsbDtcbiAgICB0aGlzLnByZXZpb3VzV2FzVGV4dE5vZGUgPSBmYWxzZTtcbiAgICB0aGlzLm1ha2VTdGF0aWNNYXJrdXAgPSBtYWtlU3RhdGljTWFya3VwO1xuICAgIHRoaXMuc3VzcGVuc2VEZXB0aCA9IDA7IC8vIENvbnRleHQgKG5ldyBBUEkpXG5cbiAgICB0aGlzLmNvbnRleHRJbmRleCA9IC0xO1xuICAgIHRoaXMuY29udGV4dFN0YWNrID0gW107XG4gICAgdGhpcy5jb250ZXh0VmFsdWVTdGFjayA9IFtdO1xuXG4gICAge1xuICAgICAgdGhpcy5jb250ZXh0UHJvdmlkZXJTdGFjayA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBSZWFjdERPTVNlcnZlclJlbmRlcmVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgaWYgKCF0aGlzLmV4aGF1c3RlZCkge1xuICAgICAgdGhpcy5leGhhdXN0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5jbGVhclByb3ZpZGVycygpO1xuICAgICAgZnJlZVRocmVhZElEKHRoaXMudGhyZWFkSUQpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogTm90ZTogV2UgdXNlIGp1c3QgdHdvIHN0YWNrcyByZWdhcmRsZXNzIG9mIGhvdyBtYW55IGNvbnRleHQgcHJvdmlkZXJzIHlvdSBoYXZlLlxuICAgKiBQcm92aWRlcnMgYXJlIGFsd2F5cyBwb3BwZWQgaW4gdGhlIHJldmVyc2Ugb3JkZXIgdG8gaG93IHRoZXkgd2VyZSBwdXNoZWRcbiAgICogc28gd2UgYWx3YXlzIGtub3cgb24gdGhlIHdheSBkb3duIHdoaWNoIHByb3ZpZGVyIHlvdSdsbCBlbmNvdW50ZXIgbmV4dCBvbiB0aGUgd2F5IHVwLlxuICAgKiBPbiB0aGUgd2F5IGRvd24sIHdlIHB1c2ggdGhlIGN1cnJlbnQgcHJvdmlkZXIsIGFuZCBpdHMgY29udGV4dCB2YWx1ZSAqYmVmb3JlKlxuICAgKiB3ZSBtdXRhdGVkIGl0LCBvbnRvIHRoZSBzdGFja3MuIFRoZXJlZm9yZSwgb24gdGhlIHdheSB1cCwgd2UgYWx3YXlzIGtub3cgd2hpY2hcbiAgICogcHJvdmlkZXIgbmVlZHMgdG8gYmUgXCJyZXN0b3JlZFwiIHRvIHdoaWNoIHZhbHVlLlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvcHVsbC8xMjk4NSNpc3N1ZWNvbW1lbnQtMzk2MzAxMjQ4XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnB1c2hQcm92aWRlciA9IGZ1bmN0aW9uIHB1c2hQcm92aWRlcihwcm92aWRlcikge1xuICAgIHZhciBpbmRleCA9ICsrdGhpcy5jb250ZXh0SW5kZXg7XG4gICAgdmFyIGNvbnRleHQgPSBwcm92aWRlci50eXBlLl9jb250ZXh0O1xuICAgIHZhciB0aHJlYWRJRCA9IHRoaXMudGhyZWFkSUQ7XG4gICAgdmFsaWRhdGVDb250ZXh0Qm91bmRzKGNvbnRleHQsIHRocmVhZElEKTtcbiAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IGNvbnRleHRbdGhyZWFkSURdOyAvLyBSZW1lbWJlciB3aGljaCB2YWx1ZSB0byByZXN0b3JlIHRoaXMgY29udGV4dCB0byBvbiBvdXIgd2F5IHVwLlxuXG4gICAgdGhpcy5jb250ZXh0U3RhY2tbaW5kZXhdID0gY29udGV4dDtcbiAgICB0aGlzLmNvbnRleHRWYWx1ZVN0YWNrW2luZGV4XSA9IHByZXZpb3VzVmFsdWU7XG5cbiAgICB7XG4gICAgICAvLyBPbmx5IHVzZWQgZm9yIHB1c2gvcG9wIG1pc21hdGNoIHdhcm5pbmdzLlxuICAgICAgdGhpcy5jb250ZXh0UHJvdmlkZXJTdGFja1tpbmRleF0gPSBwcm92aWRlcjtcbiAgICB9IC8vIE11dGF0ZSB0aGUgY3VycmVudCB2YWx1ZS5cblxuXG4gICAgY29udGV4dFt0aHJlYWRJRF0gPSBwcm92aWRlci5wcm9wcy52YWx1ZTtcbiAgfTtcblxuICBfcHJvdG8ucG9wUHJvdmlkZXIgPSBmdW5jdGlvbiBwb3BQcm92aWRlcihwcm92aWRlcikge1xuICAgIHZhciBpbmRleCA9IHRoaXMuY29udGV4dEluZGV4O1xuXG4gICAge1xuICAgICAgIShpbmRleCA+IC0xICYmIHByb3ZpZGVyID09PSB0aGlzLmNvbnRleHRQcm92aWRlclN0YWNrW2luZGV4XSkgPyB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdVbmV4cGVjdGVkIHBvcC4nKSA6IHZvaWQgMDtcbiAgICB9XG5cbiAgICB2YXIgY29udGV4dCA9IHRoaXMuY29udGV4dFN0YWNrW2luZGV4XTtcbiAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IHRoaXMuY29udGV4dFZhbHVlU3RhY2tbaW5kZXhdOyAvLyBcIkhpZGVcIiB0aGVzZSBudWxsIGFzc2lnbm1lbnRzIGZyb20gRmxvdyBieSB1c2luZyBgYW55YFxuICAgIC8vIGJlY2F1c2UgY29uY2VwdHVhbGx5IHRoZXkgYXJlIGRlbGV0aW9ucy0tYXMgbG9uZyBhcyB3ZVxuICAgIC8vIHByb21pc2UgdG8gbmV2ZXIgYWNjZXNzIHZhbHVlcyBiZXlvbmQgYHRoaXMuY29udGV4dEluZGV4YC5cblxuICAgIHRoaXMuY29udGV4dFN0YWNrW2luZGV4XSA9IG51bGw7XG4gICAgdGhpcy5jb250ZXh0VmFsdWVTdGFja1tpbmRleF0gPSBudWxsO1xuXG4gICAge1xuICAgICAgdGhpcy5jb250ZXh0UHJvdmlkZXJTdGFja1tpbmRleF0gPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuY29udGV4dEluZGV4LS07IC8vIFJlc3RvcmUgdG8gdGhlIHByZXZpb3VzIHZhbHVlIHdlIHN0b3JlZCBhcyB3ZSB3ZXJlIHdhbGtpbmcgZG93bi5cbiAgICAvLyBXZSd2ZSBhbHJlYWR5IHZlcmlmaWVkIHRoYXQgdGhpcyBjb250ZXh0IGhhcyBiZWVuIGV4cGFuZGVkIHRvIGFjY29tbW9kYXRlXG4gICAgLy8gdGhpcyB0aHJlYWQgaWQsIHNvIHdlIGRvbid0IG5lZWQgdG8gZG8gaXQgYWdhaW4uXG5cbiAgICBjb250ZXh0W3RoaXMudGhyZWFkSURdID0gcHJldmlvdXNWYWx1ZTtcbiAgfTtcblxuICBfcHJvdG8uY2xlYXJQcm92aWRlcnMgPSBmdW5jdGlvbiBjbGVhclByb3ZpZGVycygpIHtcbiAgICAvLyBSZXN0b3JlIGFueSByZW1haW5pbmcgcHJvdmlkZXJzIG9uIHRoZSBzdGFjayB0byBwcmV2aW91cyB2YWx1ZXNcbiAgICBmb3IgKHZhciBpbmRleCA9IHRoaXMuY29udGV4dEluZGV4OyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgICB2YXIgY29udGV4dCA9IHRoaXMuY29udGV4dFN0YWNrW2luZGV4XTtcbiAgICAgIHZhciBwcmV2aW91c1ZhbHVlID0gdGhpcy5jb250ZXh0VmFsdWVTdGFja1tpbmRleF07XG4gICAgICBjb250ZXh0W3RoaXMudGhyZWFkSURdID0gcHJldmlvdXNWYWx1ZTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlYWQgPSBmdW5jdGlvbiByZWFkKGJ5dGVzKSB7XG4gICAgaWYgKHRoaXMuZXhoYXVzdGVkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgcHJldlRocmVhZElEID0gY3VycmVudFRocmVhZElEO1xuICAgIHNldEN1cnJlbnRUaHJlYWRJRCh0aGlzLnRocmVhZElEKTtcbiAgICB2YXIgcHJldkRpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7XG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gRGlzcGF0Y2hlcjtcblxuICAgIHRyeSB7XG4gICAgICAvLyBNYXJrdXAgZ2VuZXJhdGVkIHdpdGhpbiA8U3VzcGVuc2U+IGVuZHMgdXAgYnVmZmVyZWQgdW50aWwgd2Uga25vd1xuICAgICAgLy8gbm90aGluZyBpbiB0aGF0IGJvdW5kYXJ5IHN1c3BlbmRlZFxuICAgICAgdmFyIG91dCA9IFsnJ107XG4gICAgICB2YXIgc3VzcGVuZGVkID0gZmFsc2U7XG5cbiAgICAgIHdoaWxlIChvdXRbMF0ubGVuZ3RoIDwgYnl0ZXMpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5leGhhdXN0ZWQgPSB0cnVlO1xuICAgICAgICAgIGZyZWVUaHJlYWRJRCh0aGlzLnRocmVhZElEKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmcmFtZSA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXTtcblxuICAgICAgICBpZiAoc3VzcGVuZGVkIHx8IGZyYW1lLmNoaWxkSW5kZXggPj0gZnJhbWUuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIGZvb3RlciA9IGZyYW1lLmZvb3RlcjtcblxuICAgICAgICAgIGlmIChmb290ZXIgIT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzV2FzVGV4dE5vZGUgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnN0YWNrLnBvcCgpO1xuXG4gICAgICAgICAgaWYgKGZyYW1lLnR5cGUgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTZWxlY3RWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgfSBlbHNlIGlmIChmcmFtZS50eXBlICE9IG51bGwgJiYgZnJhbWUudHlwZS50eXBlICE9IG51bGwgJiYgZnJhbWUudHlwZS50eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFKSB7XG4gICAgICAgICAgICB2YXIgcHJvdmlkZXIgPSBmcmFtZS50eXBlO1xuICAgICAgICAgICAgdGhpcy5wb3BQcm92aWRlcihwcm92aWRlcik7XG4gICAgICAgICAgfSBlbHNlIGlmIChmcmFtZS50eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFKSB7XG4gICAgICAgICAgICB0aGlzLnN1c3BlbnNlRGVwdGgtLTtcbiAgICAgICAgICAgIHZhciBidWZmZXJlZCA9IG91dC5wb3AoKTtcblxuICAgICAgICAgICAgaWYgKHN1c3BlbmRlZCkge1xuICAgICAgICAgICAgICBzdXNwZW5kZWQgPSBmYWxzZTsgLy8gSWYgcmVuZGVyaW5nIHdhcyBzdXNwZW5kZWQgYXQgdGhpcyBib3VuZGFyeSwgcmVuZGVyIHRoZSBmYWxsYmFja0ZyYW1lXG5cbiAgICAgICAgICAgICAgdmFyIGZhbGxiYWNrRnJhbWUgPSBmcmFtZS5mYWxsYmFja0ZyYW1lO1xuXG4gICAgICAgICAgICAgIGlmICghZmFsbGJhY2tGcmFtZSkge1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiUmVhY3RET01TZXJ2ZXIgZGlkIG5vdCBmaW5kIGFuIGludGVybmFsIGZhbGxiYWNrIGZyYW1lIGZvciBTdXNwZW5zZS4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRoaXMuc3RhY2sucHVzaChmYWxsYmFja0ZyYW1lKTtcbiAgICAgICAgICAgICAgb3V0W3RoaXMuc3VzcGVuc2VEZXB0aF0gKz0gJzwhLS0kIS0tPic7IC8vIFNraXAgZmx1c2hpbmcgb3V0cHV0IHNpbmNlIHdlJ3JlIHN3aXRjaGluZyB0byB0aGUgZmFsbGJhY2tcblxuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG91dFt0aGlzLnN1c3BlbnNlRGVwdGhdICs9IGJ1ZmZlcmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLy8gRmx1c2ggb3V0cHV0XG5cblxuICAgICAgICAgIG91dFt0aGlzLnN1c3BlbnNlRGVwdGhdICs9IGZvb3RlcjtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjaGlsZCA9IGZyYW1lLmNoaWxkcmVuW2ZyYW1lLmNoaWxkSW5kZXgrK107XG4gICAgICAgIHZhciBvdXRCdWZmZXIgPSAnJztcblxuICAgICAgICB7XG4gICAgICAgICAgcHVzaEN1cnJlbnREZWJ1Z1N0YWNrKHRoaXMuc3RhY2spOyAvLyBXZSdyZSBzdGFydGluZyB3b3JrIG9uIHRoaXMgZnJhbWUsIHNvIHJlc2V0IGl0cyBpbm5lciBzdGFjay5cblxuICAgICAgICAgIGZyYW1lLmRlYnVnRWxlbWVudFN0YWNrLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIG91dEJ1ZmZlciArPSB0aGlzLnJlbmRlcihjaGlsZCwgZnJhbWUuY29udGV4dCwgZnJhbWUuZG9tTmFtZXNwYWNlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgaWYgKGVyciAhPSBudWxsICYmIHR5cGVvZiBlcnIudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKGVuYWJsZVN1c3BlbnNlU2VydmVyUmVuZGVyZXIpIHtcbiAgICAgICAgICAgICAgaWYgKCEodGhpcy5zdXNwZW5zZURlcHRoID4gMCkpIHtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIkEgUmVhY3QgY29tcG9uZW50IHN1c3BlbmRlZCB3aGlsZSByZW5kZXJpbmcsIGJ1dCBubyBmYWxsYmFjayBVSSB3YXMgc3BlY2lmaWVkLlxcblxcbkFkZCBhIDxTdXNwZW5zZSBmYWxsYmFjaz0uLi4+IGNvbXBvbmVudCBoaWdoZXIgaW4gdGhlIHRyZWUgdG8gcHJvdmlkZSBhIGxvYWRpbmcgaW5kaWNhdG9yIG9yIHBsYWNlaG9sZGVyIHRvIGRpc3BsYXkuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHN1c3BlbmRlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJSZWFjdERPTVNlcnZlciBkb2VzIG5vdCB5ZXQgc3VwcG9ydCBTdXNwZW5zZS5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9wQ3VycmVudERlYnVnU3RhY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3V0Lmxlbmd0aCA8PSB0aGlzLnN1c3BlbnNlRGVwdGgpIHtcbiAgICAgICAgICBvdXQucHVzaCgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBvdXRbdGhpcy5zdXNwZW5zZURlcHRoXSArPSBvdXRCdWZmZXI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvdXRbMF07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IHByZXZEaXNwYXRjaGVyO1xuICAgICAgc2V0Q3VycmVudFRocmVhZElEKHByZXZUaHJlYWRJRCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoY2hpbGQsIGNvbnRleHQsIHBhcmVudE5hbWVzcGFjZSkge1xuICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjaGlsZCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhciB0ZXh0ID0gJycgKyBjaGlsZDtcblxuICAgICAgaWYgKHRleHQgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubWFrZVN0YXRpY01hcmt1cCkge1xuICAgICAgICByZXR1cm4gZXNjYXBlVGV4dEZvckJyb3dzZXIodGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByZXZpb3VzV2FzVGV4dE5vZGUpIHtcbiAgICAgICAgcmV0dXJuICc8IS0tIC0tPicgKyBlc2NhcGVUZXh0Rm9yQnJvd3Nlcih0ZXh0KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcmV2aW91c1dhc1RleHROb2RlID0gdHJ1ZTtcbiAgICAgIHJldHVybiBlc2NhcGVUZXh0Rm9yQnJvd3Nlcih0ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG5leHRDaGlsZDtcblxuICAgICAgdmFyIF9yZXNvbHZlID0gcmVzb2x2ZShjaGlsZCwgY29udGV4dCwgdGhpcy50aHJlYWRJRCk7XG5cbiAgICAgIG5leHRDaGlsZCA9IF9yZXNvbHZlLmNoaWxkO1xuICAgICAgY29udGV4dCA9IF9yZXNvbHZlLmNvbnRleHQ7XG5cbiAgICAgIGlmIChuZXh0Q2hpbGQgPT09IG51bGwgfHwgbmV4dENoaWxkID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9IGVsc2UgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChuZXh0Q2hpbGQpKSB7XG4gICAgICAgIGlmIChuZXh0Q2hpbGQgIT0gbnVsbCAmJiBuZXh0Q2hpbGQuJCR0eXBlb2YgIT0gbnVsbCkge1xuICAgICAgICAgIC8vIENhdGNoIHVuZXhwZWN0ZWQgc3BlY2lhbCB0eXBlcyBlYXJseS5cbiAgICAgICAgICB2YXIgJCR0eXBlb2YgPSBuZXh0Q2hpbGQuJCR0eXBlb2Y7XG5cbiAgICAgICAgICBpZiAoISgkJHR5cGVvZiAhPT0gUkVBQ1RfUE9SVEFMX1RZUEUpKSB7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRocm93IEVycm9yKFwiUG9ydGFscyBhcmUgbm90IGN1cnJlbnRseSBzdXBwb3J0ZWQgYnkgdGhlIHNlcnZlciByZW5kZXJlci4gUmVuZGVyIHRoZW0gY29uZGl0aW9uYWxseSBzbyB0aGF0IHRoZXkgb25seSBhcHBlYXIgb24gdGhlIGNsaWVudCByZW5kZXIuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLy8gQ2F0Y2gtYWxsIHRvIHByZXZlbnQgYW4gaW5maW5pdGUgbG9vcCBpZiBSZWFjdC5DaGlsZHJlbi50b0FycmF5KCkgc3VwcG9ydHMgc29tZSBuZXcgdHlwZS5cblxuXG4gICAgICAgICAge1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlVua25vd24gZWxlbWVudC1saWtlIG9iamVjdCB0eXBlOiBcIiArICQkdHlwZW9mLnRvU3RyaW5nKCkgKyBcIi4gVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmV4dENoaWxkcmVuID0gdG9BcnJheShuZXh0Q2hpbGQpO1xuICAgICAgICB2YXIgZnJhbWUgPSB7XG4gICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICBkb21OYW1lc3BhY2U6IHBhcmVudE5hbWVzcGFjZSxcbiAgICAgICAgICBjaGlsZHJlbjogbmV4dENoaWxkcmVuLFxuICAgICAgICAgIGNoaWxkSW5kZXg6IDAsXG4gICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICBmb290ZXI6ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAge1xuICAgICAgICAgIGZyYW1lLmRlYnVnRWxlbWVudFN0YWNrID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YWNrLnB1c2goZnJhbWUpO1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9IC8vIFNhZmUgYmVjYXVzZSB3ZSBqdXN0IGNoZWNrZWQgaXQncyBhbiBlbGVtZW50LlxuXG5cbiAgICAgIHZhciBuZXh0RWxlbWVudCA9IG5leHRDaGlsZDtcbiAgICAgIHZhciBlbGVtZW50VHlwZSA9IG5leHRFbGVtZW50LnR5cGU7XG5cbiAgICAgIGlmICh0eXBlb2YgZWxlbWVudFR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlckRPTShuZXh0RWxlbWVudCwgY29udGV4dCwgcGFyZW50TmFtZXNwYWNlKTtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChlbGVtZW50VHlwZSkge1xuICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIgX25leHRDaGlsZHJlbiA9IHRvQXJyYXkobmV4dENoaWxkLnByb3BzLmNoaWxkcmVuKTtcblxuICAgICAgICAgICAgdmFyIF9mcmFtZSA9IHtcbiAgICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgICAgZG9tTmFtZXNwYWNlOiBwYXJlbnROYW1lc3BhY2UsXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBfbmV4dENoaWxkcmVuLFxuICAgICAgICAgICAgICBjaGlsZEluZGV4OiAwLFxuICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICBmb290ZXI6ICcnXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIF9mcmFtZS5kZWJ1Z0VsZW1lbnRTdGFjayA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2goX2ZyYW1lKTtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlmIChlbmFibGVTdXNwZW5zZVNlcnZlclJlbmRlcmVyKSB7XG4gICAgICAgICAgICAgIHZhciBmYWxsYmFjayA9IG5leHRDaGlsZC5wcm9wcy5mYWxsYmFjaztcblxuICAgICAgICAgICAgICBpZiAoZmFsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIGZhbGxiYWNrLCB0aGVuIHRoaXMganVzdCBiZWhhdmVzIGFzIGEgZnJhZ21lbnQuXG4gICAgICAgICAgICAgICAgdmFyIF9uZXh0Q2hpbGRyZW4zID0gdG9BcnJheShuZXh0Q2hpbGQucHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZTMgPSB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgZG9tTmFtZXNwYWNlOiBwYXJlbnROYW1lc3BhY2UsXG4gICAgICAgICAgICAgICAgICBjaGlsZHJlbjogX25leHRDaGlsZHJlbjMsXG4gICAgICAgICAgICAgICAgICBjaGlsZEluZGV4OiAwLFxuICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICAgIGZvb3RlcjogJydcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgX2ZyYW1lMy5kZWJ1Z0VsZW1lbnRTdGFjayA9IFtdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuc3RhY2sucHVzaChfZnJhbWUzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB2YXIgZmFsbGJhY2tDaGlsZHJlbiA9IHRvQXJyYXkoZmFsbGJhY2spO1xuXG4gICAgICAgICAgICAgIHZhciBfbmV4dENoaWxkcmVuMiA9IHRvQXJyYXkobmV4dENoaWxkLnByb3BzLmNoaWxkcmVuKTtcblxuICAgICAgICAgICAgICB2YXIgZmFsbGJhY2tGcmFtZSA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgICAgIGRvbU5hbWVzcGFjZTogcGFyZW50TmFtZXNwYWNlLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBmYWxsYmFja0NoaWxkcmVuLFxuICAgICAgICAgICAgICAgIGNoaWxkSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICBmb290ZXI6ICc8IS0tLyQtLT4nXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHZhciBfZnJhbWUyID0ge1xuICAgICAgICAgICAgICAgIGZhbGxiYWNrRnJhbWU6IGZhbGxiYWNrRnJhbWUsXG4gICAgICAgICAgICAgICAgdHlwZTogUkVBQ1RfU1VTUEVOU0VfVFlQRSxcbiAgICAgICAgICAgICAgICBkb21OYW1lc3BhY2U6IHBhcmVudE5hbWVzcGFjZSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogX25leHRDaGlsZHJlbjIsXG4gICAgICAgICAgICAgICAgY2hpbGRJbmRleDogMCxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgIGZvb3RlcjogJzwhLS0vJC0tPidcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX2ZyYW1lMi5kZWJ1Z0VsZW1lbnRTdGFjayA9IFtdO1xuICAgICAgICAgICAgICAgIGZhbGxiYWNrRnJhbWUuZGVidWdFbGVtZW50U3RhY2sgPSBbXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRoaXMuc3RhY2sucHVzaChfZnJhbWUyKTtcbiAgICAgICAgICAgICAgdGhpcy5zdXNwZW5zZURlcHRoKys7XG4gICAgICAgICAgICAgIHJldHVybiAnPCEtLSQtLT4nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiUmVhY3RET01TZXJ2ZXIgZG9lcyBub3QgeWV0IHN1cHBvcnQgU3VzcGVuc2UuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lLW5vLWZhbGx0aHJvdWdoXG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBlbGVtZW50VHlwZSA9PT0gJ29iamVjdCcgJiYgZWxlbWVudFR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgc3dpdGNoIChlbGVtZW50VHlwZS4kJHR5cGVvZikge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBuZXh0Q2hpbGQ7XG5cbiAgICAgICAgICAgICAgdmFyIF9uZXh0Q2hpbGRyZW40O1xuXG4gICAgICAgICAgICAgIHZhciBjb21wb25lbnRJZGVudGl0eSA9IHt9O1xuICAgICAgICAgICAgICBwcmVwYXJlVG9Vc2VIb29rcyhjb21wb25lbnRJZGVudGl0eSk7XG4gICAgICAgICAgICAgIF9uZXh0Q2hpbGRyZW40ID0gZWxlbWVudFR5cGUucmVuZGVyKGVsZW1lbnQucHJvcHMsIGVsZW1lbnQucmVmKTtcbiAgICAgICAgICAgICAgX25leHRDaGlsZHJlbjQgPSBmaW5pc2hIb29rcyhlbGVtZW50VHlwZS5yZW5kZXIsIGVsZW1lbnQucHJvcHMsIF9uZXh0Q2hpbGRyZW40LCBlbGVtZW50LnJlZik7XG4gICAgICAgICAgICAgIF9uZXh0Q2hpbGRyZW40ID0gdG9BcnJheShfbmV4dENoaWxkcmVuNCk7XG4gICAgICAgICAgICAgIHZhciBfZnJhbWU0ID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICAgICAgZG9tTmFtZXNwYWNlOiBwYXJlbnROYW1lc3BhY2UsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IF9uZXh0Q2hpbGRyZW40LFxuICAgICAgICAgICAgICAgIGNoaWxkSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICBmb290ZXI6ICcnXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9mcmFtZTQuZGVidWdFbGVtZW50U3RhY2sgPSBbXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRoaXMuc3RhY2sucHVzaChfZnJhbWU0KTtcbiAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhciBfZWxlbWVudCA9IG5leHRDaGlsZDtcbiAgICAgICAgICAgICAgdmFyIF9uZXh0Q2hpbGRyZW41ID0gW1JlYWN0LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUudHlwZSwgX2Fzc2lnbih7XG4gICAgICAgICAgICAgICAgcmVmOiBfZWxlbWVudC5yZWZcbiAgICAgICAgICAgICAgfSwgX2VsZW1lbnQucHJvcHMpKV07XG4gICAgICAgICAgICAgIHZhciBfZnJhbWU1ID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICAgICAgZG9tTmFtZXNwYWNlOiBwYXJlbnROYW1lc3BhY2UsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IF9uZXh0Q2hpbGRyZW41LFxuICAgICAgICAgICAgICAgIGNoaWxkSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICBmb290ZXI6ICcnXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9mcmFtZTUuZGVidWdFbGVtZW50U3RhY2sgPSBbXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRoaXMuc3RhY2sucHVzaChfZnJhbWU1KTtcbiAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2YXIgcHJvdmlkZXIgPSBuZXh0Q2hpbGQ7XG4gICAgICAgICAgICAgIHZhciBuZXh0UHJvcHMgPSBwcm92aWRlci5wcm9wcztcblxuICAgICAgICAgICAgICB2YXIgX25leHRDaGlsZHJlbjYgPSB0b0FycmF5KG5leHRQcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgICAgICAgICAgdmFyIF9mcmFtZTYgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogcHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgZG9tTmFtZXNwYWNlOiBwYXJlbnROYW1lc3BhY2UsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IF9uZXh0Q2hpbGRyZW42LFxuICAgICAgICAgICAgICAgIGNoaWxkSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICBmb290ZXI6ICcnXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9mcmFtZTYuZGVidWdFbGVtZW50U3RhY2sgPSBbXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRoaXMucHVzaFByb3ZpZGVyKHByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgdGhpcy5zdGFjay5wdXNoKF9mcmFtZTYpO1xuICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFyIHJlYWN0Q29udGV4dCA9IG5leHRDaGlsZC50eXBlOyAvLyBUaGUgbG9naWMgYmVsb3cgZm9yIENvbnRleHQgZGlmZmVycyBkZXBlbmRpbmcgb24gUFJPRCBvciBERVYgbW9kZS4gSW5cbiAgICAgICAgICAgICAgLy8gREVWIG1vZGUsIHdlIGNyZWF0ZSBhIHNlcGFyYXRlIG9iamVjdCBmb3IgQ29udGV4dC5Db25zdW1lciB0aGF0IGFjdHNcbiAgICAgICAgICAgICAgLy8gbGlrZSBhIHByb3h5IHRvIENvbnRleHQuIFRoaXMgcHJveHkgb2JqZWN0IGFkZHMgdW5uZWNlc3NhcnkgY29kZSBpbiBQUk9EXG4gICAgICAgICAgICAgIC8vIHNvIHdlIHVzZSB0aGUgb2xkIGJlaGF2aW91ciAoQ29udGV4dC5Db25zdW1lciByZWZlcmVuY2VzIENvbnRleHQpIHRvXG4gICAgICAgICAgICAgIC8vIHJlZHVjZSBzaXplIGFuZCBvdmVyaGVhZC4gVGhlIHNlcGFyYXRlIG9iamVjdCByZWZlcmVuY2VzIGNvbnRleHQgdmlhXG4gICAgICAgICAgICAgIC8vIGEgcHJvcGVydHkgY2FsbGVkIFwiX2NvbnRleHRcIiwgd2hpY2ggYWxzbyBnaXZlcyB1cyB0aGUgYWJpbGl0eSB0byBjaGVja1xuICAgICAgICAgICAgICAvLyBpbiBERVYgbW9kZSBpZiB0aGlzIHByb3BlcnR5IGV4aXN0cyBvciBub3QgYW5kIHdhcm4gaWYgaXQgZG9lcyBub3QuXG5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChyZWFjdENvbnRleHQuX2NvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgLy8gVGhpcyBtYXkgYmUgYmVjYXVzZSBpdCdzIGEgQ29udGV4dCAocmF0aGVyIHRoYW4gYSBDb25zdW1lcikuXG4gICAgICAgICAgICAgICAgICAvLyBPciBpdCBtYXkgYmUgYmVjYXVzZSBpdCdzIG9sZGVyIFJlYWN0IHdoZXJlIHRoZXkncmUgdGhlIHNhbWUgdGhpbmcuXG4gICAgICAgICAgICAgICAgICAvLyBXZSBvbmx5IHdhbnQgdG8gd2FybiBpZiB3ZSdyZSBzdXJlIGl0J3MgYSBuZXcgUmVhY3QuXG4gICAgICAgICAgICAgICAgICBpZiAocmVhY3RDb250ZXh0ICE9PSByZWFjdENvbnRleHQuQ29uc3VtZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nQ29udGV4dEFzQ29uc3VtZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nQ29udGV4dEFzQ29uc3VtZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgIHdhcm5pbmckMShmYWxzZSwgJ1JlbmRlcmluZyA8Q29udGV4dD4gZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Db25zdW1lcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZWFjdENvbnRleHQgPSByZWFjdENvbnRleHQuX2NvbnRleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdmFyIF9uZXh0UHJvcHMgPSBuZXh0Q2hpbGQucHJvcHM7XG4gICAgICAgICAgICAgIHZhciB0aHJlYWRJRCA9IHRoaXMudGhyZWFkSUQ7XG4gICAgICAgICAgICAgIHZhbGlkYXRlQ29udGV4dEJvdW5kcyhyZWFjdENvbnRleHQsIHRocmVhZElEKTtcbiAgICAgICAgICAgICAgdmFyIG5leHRWYWx1ZSA9IHJlYWN0Q29udGV4dFt0aHJlYWRJRF07XG5cbiAgICAgICAgICAgICAgdmFyIF9uZXh0Q2hpbGRyZW43ID0gdG9BcnJheShfbmV4dFByb3BzLmNoaWxkcmVuKG5leHRWYWx1ZSkpO1xuXG4gICAgICAgICAgICAgIHZhciBfZnJhbWU3ID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IG5leHRDaGlsZCxcbiAgICAgICAgICAgICAgICBkb21OYW1lc3BhY2U6IHBhcmVudE5hbWVzcGFjZSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogX25leHRDaGlsZHJlbjcsXG4gICAgICAgICAgICAgICAgY2hpbGRJbmRleDogMCxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgIGZvb3RlcjogJydcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX2ZyYW1lNy5kZWJ1Z0VsZW1lbnRTdGFjayA9IFtdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhpcy5zdGFjay5wdXNoKF9mcmFtZTcpO1xuICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lLW5vLWZhbGx0aHJvdWdoXG5cbiAgICAgICAgICBjYXNlIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEU6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlmIChlbmFibGVGdW5kYW1lbnRhbEFQSSkge1xuICAgICAgICAgICAgICAgIHZhciBmdW5kYW1lbnRhbEltcGwgPSBlbGVtZW50VHlwZS5pbXBsO1xuICAgICAgICAgICAgICAgIHZhciBvcGVuID0gZnVuZGFtZW50YWxJbXBsLmdldFNlcnZlclNpZGVTdHJpbmcobnVsbCwgbmV4dEVsZW1lbnQucHJvcHMpO1xuICAgICAgICAgICAgICAgIHZhciBnZXRTZXJ2ZXJTaWRlU3RyaW5nQ2xvc2UgPSBmdW5kYW1lbnRhbEltcGwuZ2V0U2VydmVyU2lkZVN0cmluZ0Nsb3NlO1xuICAgICAgICAgICAgICAgIHZhciBjbG9zZSA9IGdldFNlcnZlclNpZGVTdHJpbmdDbG9zZSAhPT0gdW5kZWZpbmVkID8gZ2V0U2VydmVyU2lkZVN0cmluZ0Nsb3NlKG51bGwsIG5leHRFbGVtZW50LnByb3BzKSA6ICcnO1xuXG4gICAgICAgICAgICAgICAgdmFyIF9uZXh0Q2hpbGRyZW44ID0gZnVuZGFtZW50YWxJbXBsLnJlY29uY2lsZUNoaWxkcmVuICE9PSBmYWxzZSA/IHRvQXJyYXkobmV4dENoaWxkLnByb3BzLmNoaWxkcmVuKSA6IFtdO1xuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZTggPSB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgZG9tTmFtZXNwYWNlOiBwYXJlbnROYW1lc3BhY2UsXG4gICAgICAgICAgICAgICAgICBjaGlsZHJlbjogX25leHRDaGlsZHJlbjgsXG4gICAgICAgICAgICAgICAgICBjaGlsZEluZGV4OiAwLFxuICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICAgIGZvb3RlcjogY2xvc2VcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgX2ZyYW1lOC5kZWJ1Z0VsZW1lbnRTdGFjayA9IFtdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuc3RhY2sucHVzaChfZnJhbWU4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3BlbjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlJlYWN0RE9NU2VydmVyIGRvZXMgbm90IHlldCBzdXBwb3J0IHRoZSBmdW5kYW1lbnRhbCBBUEkuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZS1uby1mYWxsdGhyb3VnaFxuXG4gICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhciBfZWxlbWVudDIgPSBuZXh0Q2hpbGQ7XG4gICAgICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gbmV4dENoaWxkLnR5cGU7IC8vIEF0dGVtcHQgdG8gaW5pdGlhbGl6ZSBsYXp5IGNvbXBvbmVudCByZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhlXG4gICAgICAgICAgICAgIC8vIHN1c3BlbnNlIHNlcnZlci1zaWRlIHJlbmRlcmVyIGlzIGVuYWJsZWQgc28gc3luY2hyb25vdXNseVxuICAgICAgICAgICAgICAvLyByZXNvbHZlZCBjb25zdHJ1Y3RvcnMgYXJlIHN1cHBvcnRlZC5cblxuICAgICAgICAgICAgICBpbml0aWFsaXplTGF6eUNvbXBvbmVudFR5cGUobGF6eUNvbXBvbmVudCk7XG5cbiAgICAgICAgICAgICAgc3dpdGNoIChsYXp5Q29tcG9uZW50Ll9zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFJlc29sdmVkOlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX25leHRDaGlsZHJlbjkgPSBbUmVhY3QuY3JlYXRlRWxlbWVudChsYXp5Q29tcG9uZW50Ll9yZXN1bHQsIF9hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICAgIHJlZjogX2VsZW1lbnQyLnJlZlxuICAgICAgICAgICAgICAgICAgICB9LCBfZWxlbWVudDIucHJvcHMpKV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBfZnJhbWU5ID0ge1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgZG9tTmFtZXNwYWNlOiBwYXJlbnROYW1lc3BhY2UsXG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IF9uZXh0Q2hpbGRyZW45LFxuICAgICAgICAgICAgICAgICAgICAgIGNoaWxkSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICBmb290ZXI6ICcnXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIF9mcmFtZTkuZGVidWdFbGVtZW50U3RhY2sgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhY2sucHVzaChfZnJhbWU5KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2FzZSBSZWplY3RlZDpcbiAgICAgICAgICAgICAgICAgIHRocm93IGxhenlDb21wb25lbnQuX3Jlc3VsdDtcblxuICAgICAgICAgICAgICAgIGNhc2UgUGVuZGluZzpcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJSZWFjdERPTVNlcnZlciBkb2VzIG5vdCB5ZXQgc3VwcG9ydCBsYXp5LWxvYWRlZCBjb21wb25lbnRzLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUtbm8tZmFsbHRocm91Z2hcblxuICAgICAgICAgIGNhc2UgUkVBQ1RfU0NPUEVfVFlQRTpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWYgKGVuYWJsZVNjb3BlQVBJKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9uZXh0Q2hpbGRyZW4xMCA9IHRvQXJyYXkobmV4dENoaWxkLnByb3BzLmNoaWxkcmVuKTtcblxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUxMCA9IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICAgICAgICBkb21OYW1lc3BhY2U6IHBhcmVudE5hbWVzcGFjZSxcbiAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBfbmV4dENoaWxkcmVuMTAsXG4gICAgICAgICAgICAgICAgICBjaGlsZEluZGV4OiAwLFxuICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICAgIGZvb3RlcjogJydcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgX2ZyYW1lMTAuZGVidWdFbGVtZW50U3RhY2sgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2goX2ZyYW1lMTApO1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlJlYWN0RE9NU2VydmVyIGRvZXMgbm90IHlldCBzdXBwb3J0IHNjb3BlIGNvbXBvbmVudHMuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICAgIHtcbiAgICAgICAgdmFyIG93bmVyID0gbmV4dEVsZW1lbnQuX293bmVyO1xuXG4gICAgICAgIGlmIChlbGVtZW50VHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiBlbGVtZW50VHlwZSA9PT0gJ29iamVjdCcgJiYgZWxlbWVudFR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXMoZWxlbWVudFR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIFwiICsgJ25hbWVkIGltcG9ydHMuJztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvd25lck5hbWUgPSBvd25lciA/IGdldENvbXBvbmVudE5hbWUob3duZXIpIDogbnVsbDtcblxuICAgICAgICBpZiAob3duZXJOYW1lKSB7XG4gICAgICAgICAgaW5mbyArPSAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBvd25lck5hbWUgKyAnYC4nO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHtcbiAgICAgICAge1xuICAgICAgICAgIHRocm93IEVycm9yKFwiRWxlbWVudCB0eXBlIGlzIGludmFsaWQ6IGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSBjb21wb25lbnRzKSBidXQgZ290OiBcIiArIChlbGVtZW50VHlwZSA9PSBudWxsID8gZWxlbWVudFR5cGUgOiB0eXBlb2YgZWxlbWVudFR5cGUpICsgXCIuXCIgKyBpbmZvKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyRE9NID0gZnVuY3Rpb24gcmVuZGVyRE9NKGVsZW1lbnQsIGNvbnRleHQsIHBhcmVudE5hbWVzcGFjZSkge1xuICAgIHZhciB0YWcgPSBlbGVtZW50LnR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICB2YXIgbmFtZXNwYWNlID0gcGFyZW50TmFtZXNwYWNlO1xuXG4gICAgaWYgKHBhcmVudE5hbWVzcGFjZSA9PT0gTmFtZXNwYWNlcy5odG1sKSB7XG4gICAgICBuYW1lc3BhY2UgPSBnZXRJbnRyaW5zaWNOYW1lc3BhY2UodGFnKTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAobmFtZXNwYWNlID09PSBOYW1lc3BhY2VzLmh0bWwpIHtcbiAgICAgICAgLy8gU2hvdWxkIHRoaXMgY2hlY2sgYmUgZ2F0ZWQgYnkgcGFyZW50IG5hbWVzcGFjZT8gTm90IHN1cmUgd2Ugd2FudCB0b1xuICAgICAgICAvLyBhbGxvdyA8U1ZHPiBvciA8bUFUSD4uXG4gICAgICAgICEodGFnID09PSBlbGVtZW50LnR5cGUpID8gd2FybmluZyQxKGZhbHNlLCAnPCVzIC8+IGlzIHVzaW5nIGluY29ycmVjdCBjYXNpbmcuICcgKyAnVXNlIFBhc2NhbENhc2UgZm9yIFJlYWN0IGNvbXBvbmVudHMsICcgKyAnb3IgbG93ZXJjYXNlIGZvciBIVE1MIGVsZW1lbnRzLicsIGVsZW1lbnQudHlwZSkgOiB2b2lkIDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFsaWRhdGVEYW5nZXJvdXNUYWcodGFnKTtcbiAgICB2YXIgcHJvcHMgPSBlbGVtZW50LnByb3BzO1xuXG4gICAgaWYgKHRhZyA9PT0gJ2lucHV0Jykge1xuICAgICAge1xuICAgICAgICBSZWFjdENvbnRyb2xsZWRWYWx1ZVByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygnaW5wdXQnLCBwcm9wcyk7XG5cbiAgICAgICAgaWYgKHByb3BzLmNoZWNrZWQgIT09IHVuZGVmaW5lZCAmJiBwcm9wcy5kZWZhdWx0Q2hlY2tlZCAhPT0gdW5kZWZpbmVkICYmICFkaWRXYXJuRGVmYXVsdENoZWNrZWQpIHtcbiAgICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICclcyBjb250YWlucyBhbiBpbnB1dCBvZiB0eXBlICVzIHdpdGggYm90aCBjaGVja2VkIGFuZCBkZWZhdWx0Q2hlY2tlZCBwcm9wcy4gJyArICdJbnB1dCBlbGVtZW50cyBtdXN0IGJlIGVpdGhlciBjb250cm9sbGVkIG9yIHVuY29udHJvbGxlZCAnICsgJyhzcGVjaWZ5IGVpdGhlciB0aGUgY2hlY2tlZCBwcm9wLCBvciB0aGUgZGVmYXVsdENoZWNrZWQgcHJvcCwgYnV0IG5vdCAnICsgJ2JvdGgpLiBEZWNpZGUgYmV0d2VlbiB1c2luZyBhIGNvbnRyb2xsZWQgb3IgdW5jb250cm9sbGVkIGlucHV0ICcgKyAnZWxlbWVudCBhbmQgcmVtb3ZlIG9uZSBvZiB0aGVzZSBwcm9wcy4gTW9yZSBpbmZvOiAnICsgJ2h0dHBzOi8vZmIubWUvcmVhY3QtY29udHJvbGxlZC1jb21wb25lbnRzJywgJ0EgY29tcG9uZW50JywgcHJvcHMudHlwZSk7XG4gICAgICAgICAgZGlkV2FybkRlZmF1bHRDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy52YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHByb3BzLmRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmICFkaWRXYXJuRGVmYXVsdElucHV0VmFsdWUpIHtcbiAgICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICclcyBjb250YWlucyBhbiBpbnB1dCBvZiB0eXBlICVzIHdpdGggYm90aCB2YWx1ZSBhbmQgZGVmYXVsdFZhbHVlIHByb3BzLiAnICsgJ0lucHV0IGVsZW1lbnRzIG11c3QgYmUgZWl0aGVyIGNvbnRyb2xsZWQgb3IgdW5jb250cm9sbGVkICcgKyAnKHNwZWNpZnkgZWl0aGVyIHRoZSB2YWx1ZSBwcm9wLCBvciB0aGUgZGVmYXVsdFZhbHVlIHByb3AsIGJ1dCBub3QgJyArICdib3RoKS4gRGVjaWRlIGJldHdlZW4gdXNpbmcgYSBjb250cm9sbGVkIG9yIHVuY29udHJvbGxlZCBpbnB1dCAnICsgJ2VsZW1lbnQgYW5kIHJlbW92ZSBvbmUgb2YgdGhlc2UgcHJvcHMuIE1vcmUgaW5mbzogJyArICdodHRwczovL2ZiLm1lL3JlYWN0LWNvbnRyb2xsZWQtY29tcG9uZW50cycsICdBIGNvbXBvbmVudCcsIHByb3BzLnR5cGUpO1xuICAgICAgICAgIGRpZFdhcm5EZWZhdWx0SW5wdXRWYWx1ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJvcHMgPSBfYXNzaWduKHtcbiAgICAgICAgdHlwZTogdW5kZWZpbmVkXG4gICAgICB9LCBwcm9wcywge1xuICAgICAgICBkZWZhdWx0Q2hlY2tlZDogdW5kZWZpbmVkLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgdmFsdWU6IHByb3BzLnZhbHVlICE9IG51bGwgPyBwcm9wcy52YWx1ZSA6IHByb3BzLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgY2hlY2tlZDogcHJvcHMuY2hlY2tlZCAhPSBudWxsID8gcHJvcHMuY2hlY2tlZCA6IHByb3BzLmRlZmF1bHRDaGVja2VkXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRhZyA9PT0gJ3RleHRhcmVhJykge1xuICAgICAge1xuICAgICAgICBSZWFjdENvbnRyb2xsZWRWYWx1ZVByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygndGV4dGFyZWEnLCBwcm9wcyk7XG5cbiAgICAgICAgaWYgKHByb3BzLnZhbHVlICE9PSB1bmRlZmluZWQgJiYgcHJvcHMuZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQgJiYgIWRpZFdhcm5EZWZhdWx0VGV4dGFyZWFWYWx1ZSkge1xuICAgICAgICAgIHdhcm5pbmckMShmYWxzZSwgJ1RleHRhcmVhIGVsZW1lbnRzIG11c3QgYmUgZWl0aGVyIGNvbnRyb2xsZWQgb3IgdW5jb250cm9sbGVkICcgKyAnKHNwZWNpZnkgZWl0aGVyIHRoZSB2YWx1ZSBwcm9wLCBvciB0aGUgZGVmYXVsdFZhbHVlIHByb3AsIGJ1dCBub3QgJyArICdib3RoKS4gRGVjaWRlIGJldHdlZW4gdXNpbmcgYSBjb250cm9sbGVkIG9yIHVuY29udHJvbGxlZCB0ZXh0YXJlYSAnICsgJ2FuZCByZW1vdmUgb25lIG9mIHRoZXNlIHByb3BzLiBNb3JlIGluZm86ICcgKyAnaHR0cHM6Ly9mYi5tZS9yZWFjdC1jb250cm9sbGVkLWNvbXBvbmVudHMnKTtcbiAgICAgICAgICBkaWRXYXJuRGVmYXVsdFRleHRhcmVhVmFsdWUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpbml0aWFsVmFsdWUgPSBwcm9wcy52YWx1ZTtcblxuICAgICAgaWYgKGluaXRpYWxWYWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWU7IC8vIFRPRE8gKHl1bmdzdGVycyk6IFJlbW92ZSBzdXBwb3J0IGZvciBjaGlsZHJlbiBjb250ZW50IGluIDx0ZXh0YXJlYT4uXG5cbiAgICAgICAgdmFyIHRleHRhcmVhQ2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgICBpZiAodGV4dGFyZWFDaGlsZHJlbiAhPSBudWxsKSB7XG4gICAgICAgICAge1xuICAgICAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnVXNlIHRoZSBgZGVmYXVsdFZhbHVlYCBvciBgdmFsdWVgIHByb3BzIGluc3RlYWQgb2Ygc2V0dGluZyAnICsgJ2NoaWxkcmVuIG9uIDx0ZXh0YXJlYT4uJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCEoZGVmYXVsdFZhbHVlID09IG51bGwpKSB7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRocm93IEVycm9yKFwiSWYgeW91IHN1cHBseSBgZGVmYXVsdFZhbHVlYCBvbiBhIDx0ZXh0YXJlYT4sIGRvIG5vdCBwYXNzIGNoaWxkcmVuLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0ZXh0YXJlYUNoaWxkcmVuKSkge1xuICAgICAgICAgICAgaWYgKCEodGV4dGFyZWFDaGlsZHJlbi5sZW5ndGggPD0gMSkpIHtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiPHRleHRhcmVhPiBjYW4gb25seSBoYXZlIGF0IG1vc3Qgb25lIGNoaWxkLlwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0ZXh0YXJlYUNoaWxkcmVuID0gdGV4dGFyZWFDaGlsZHJlblswXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkZWZhdWx0VmFsdWUgPSAnJyArIHRleHRhcmVhQ2hpbGRyZW47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVmYXVsdFZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICBkZWZhdWx0VmFsdWUgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGluaXRpYWxWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgcHJvcHMgPSBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICBjaGlsZHJlbjogJycgKyBpbml0aWFsVmFsdWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGFnID09PSAnc2VsZWN0Jykge1xuICAgICAge1xuICAgICAgICBSZWFjdENvbnRyb2xsZWRWYWx1ZVByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygnc2VsZWN0JywgcHJvcHMpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWVQcm9wTmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgcHJvcE5hbWUgPSB2YWx1ZVByb3BOYW1lc1tpXTtcblxuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KHByb3BzW3Byb3BOYW1lXSk7XG5cbiAgICAgICAgICBpZiAocHJvcHMubXVsdGlwbGUgJiYgIWlzQXJyYXkpIHtcbiAgICAgICAgICAgIHdhcm5pbmckMShmYWxzZSwgJ1RoZSBgJXNgIHByb3Agc3VwcGxpZWQgdG8gPHNlbGVjdD4gbXVzdCBiZSBhbiBhcnJheSBpZiAnICsgJ2BtdWx0aXBsZWAgaXMgdHJ1ZS4nLCBwcm9wTmFtZSk7XG4gICAgICAgICAgfSBlbHNlIGlmICghcHJvcHMubXVsdGlwbGUgJiYgaXNBcnJheSkge1xuICAgICAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnVGhlIGAlc2AgcHJvcCBzdXBwbGllZCB0byA8c2VsZWN0PiBtdXN0IGJlIGEgc2NhbGFyICcgKyAndmFsdWUgaWYgYG11bHRpcGxlYCBpcyBmYWxzZS4nLCBwcm9wTmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BzLnZhbHVlICE9PSB1bmRlZmluZWQgJiYgcHJvcHMuZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQgJiYgIWRpZFdhcm5EZWZhdWx0U2VsZWN0VmFsdWUpIHtcbiAgICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdTZWxlY3QgZWxlbWVudHMgbXVzdCBiZSBlaXRoZXIgY29udHJvbGxlZCBvciB1bmNvbnRyb2xsZWQgJyArICcoc3BlY2lmeSBlaXRoZXIgdGhlIHZhbHVlIHByb3AsIG9yIHRoZSBkZWZhdWx0VmFsdWUgcHJvcCwgYnV0IG5vdCAnICsgJ2JvdGgpLiBEZWNpZGUgYmV0d2VlbiB1c2luZyBhIGNvbnRyb2xsZWQgb3IgdW5jb250cm9sbGVkIHNlbGVjdCAnICsgJ2VsZW1lbnQgYW5kIHJlbW92ZSBvbmUgb2YgdGhlc2UgcHJvcHMuIE1vcmUgaW5mbzogJyArICdodHRwczovL2ZiLm1lL3JlYWN0LWNvbnRyb2xsZWQtY29tcG9uZW50cycpO1xuICAgICAgICAgIGRpZFdhcm5EZWZhdWx0U2VsZWN0VmFsdWUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY3VycmVudFNlbGVjdFZhbHVlID0gcHJvcHMudmFsdWUgIT0gbnVsbCA/IHByb3BzLnZhbHVlIDogcHJvcHMuZGVmYXVsdFZhbHVlO1xuICAgICAgcHJvcHMgPSBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICB2YWx1ZTogdW5kZWZpbmVkXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRhZyA9PT0gJ29wdGlvbicpIHtcbiAgICAgIHZhciBzZWxlY3RlZCA9IG51bGw7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSB0aGlzLmN1cnJlbnRTZWxlY3RWYWx1ZTtcbiAgICAgIHZhciBvcHRpb25DaGlsZHJlbiA9IGZsYXR0ZW5PcHRpb25DaGlsZHJlbihwcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgIGlmIChzZWxlY3RWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIHZhciB2YWx1ZTtcblxuICAgICAgICBpZiAocHJvcHMudmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgIHZhbHVlID0gcHJvcHMudmFsdWUgKyAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IG9wdGlvbkNoaWxkcmVuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RWYWx1ZSkpIHtcbiAgICAgICAgICAvLyBtdWx0aXBsZVxuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2VsZWN0VmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmICgnJyArIHNlbGVjdFZhbHVlW2pdID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxlY3RlZCA9ICcnICsgc2VsZWN0VmFsdWUgPT09IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvcHMgPSBfYXNzaWduKHtcbiAgICAgICAgICBzZWxlY3RlZDogdW5kZWZpbmVkLFxuICAgICAgICAgIGNoaWxkcmVuOiB1bmRlZmluZWRcbiAgICAgICAgfSwgcHJvcHMsIHtcbiAgICAgICAgICBzZWxlY3RlZDogc2VsZWN0ZWQsXG4gICAgICAgICAgY2hpbGRyZW46IG9wdGlvbkNoaWxkcmVuXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHtcbiAgICAgIHZhbGlkYXRlUHJvcGVydGllc0luRGV2ZWxvcG1lbnQodGFnLCBwcm9wcyk7XG4gICAgfVxuXG4gICAgYXNzZXJ0VmFsaWRQcm9wcyh0YWcsIHByb3BzKTtcbiAgICB2YXIgb3V0ID0gY3JlYXRlT3BlblRhZ01hcmt1cChlbGVtZW50LnR5cGUsIHRhZywgcHJvcHMsIG5hbWVzcGFjZSwgdGhpcy5tYWtlU3RhdGljTWFya3VwLCB0aGlzLnN0YWNrLmxlbmd0aCA9PT0gMSk7XG4gICAgdmFyIGZvb3RlciA9ICcnO1xuXG4gICAgaWYgKG9taXR0ZWRDbG9zZVRhZ3MuaGFzT3duUHJvcGVydHkodGFnKSkge1xuICAgICAgb3V0ICs9ICcvPic7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dCArPSAnPic7XG4gICAgICBmb290ZXIgPSAnPC8nICsgZWxlbWVudC50eXBlICsgJz4nO1xuICAgIH1cblxuICAgIHZhciBjaGlsZHJlbjtcbiAgICB2YXIgaW5uZXJNYXJrdXAgPSBnZXROb25DaGlsZHJlbklubmVyTWFya3VwKHByb3BzKTtcblxuICAgIGlmIChpbm5lck1hcmt1cCAhPSBudWxsKSB7XG4gICAgICBjaGlsZHJlbiA9IFtdO1xuXG4gICAgICBpZiAobmV3bGluZUVhdGluZ1RhZ3NbdGFnXSAmJiBpbm5lck1hcmt1cC5jaGFyQXQoMCkgPT09ICdcXG4nKSB7XG4gICAgICAgIC8vIHRleHQvaHRtbCBpZ25vcmVzIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaW4gdGhlc2UgdGFncyBpZiBpdCdzIGEgbmV3bGluZVxuICAgICAgICAvLyBQcmVmZXIgdG8gYnJlYWsgYXBwbGljYXRpb24veG1sIG92ZXIgdGV4dC9odG1sIChmb3Igbm93KSBieSBhZGRpbmdcbiAgICAgICAgLy8gYSBuZXdsaW5lIHNwZWNpZmljYWxseSB0byBnZXQgZWF0ZW4gYnkgdGhlIHBhcnNlci4gKEFsdGVybmF0ZWx5IGZvclxuICAgICAgICAvLyB0ZXh0YXJlYXMsIHJlcGxhY2luZyBcIl5cXG5cIiB3aXRoIFwiXFxyXFxuXCIgZG9lc24ndCBnZXQgZWF0ZW4sIGFuZCB0aGUgZmlyc3RcbiAgICAgICAgLy8gXFxyIGlzIG5vcm1hbGl6ZWQgb3V0IGJ5IEhUTUxUZXh0QXJlYUVsZW1lbnQjdmFsdWUuKVxuICAgICAgICAvLyBTZWU6IDxodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sLXBvbHlnbG90LyNuZXdsaW5lcy1pbi10ZXh0YXJlYS1hbmQtcHJlPlxuICAgICAgICAvLyBTZWU6IDxodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sNS9zeW50YXguaHRtbCNlbGVtZW50LXJlc3RyaWN0aW9ucz5cbiAgICAgICAgLy8gU2VlOiA8aHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDUvc3ludGF4Lmh0bWwjbmV3bGluZXM+XG4gICAgICAgIC8vIFNlZTogUGFyc2luZyBvZiBcInRleHRhcmVhXCIgXCJsaXN0aW5nXCIgYW5kIFwicHJlXCIgZWxlbWVudHNcbiAgICAgICAgLy8gIGZyb20gPGh0dHA6Ly93d3cudzMub3JnL1RSL2h0bWw1L3N5bnRheC5odG1sI3BhcnNpbmctbWFpbi1pbmJvZHk+XG4gICAgICAgIG91dCArPSAnXFxuJztcbiAgICAgIH1cblxuICAgICAgb3V0ICs9IGlubmVyTWFya3VwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZHJlbiA9IHRvQXJyYXkocHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIHZhciBmcmFtZSA9IHtcbiAgICAgIGRvbU5hbWVzcGFjZTogZ2V0Q2hpbGROYW1lc3BhY2UocGFyZW50TmFtZXNwYWNlLCBlbGVtZW50LnR5cGUpLFxuICAgICAgdHlwZTogdGFnLFxuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgICAgY2hpbGRJbmRleDogMCxcbiAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICBmb290ZXI6IGZvb3RlclxuICAgIH07XG5cbiAgICB7XG4gICAgICBmcmFtZS5kZWJ1Z0VsZW1lbnRTdGFjayA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMuc3RhY2sucHVzaChmcmFtZSk7XG4gICAgdGhpcy5wcmV2aW91c1dhc1RleHROb2RlID0gZmFsc2U7XG4gICAgcmV0dXJuIG91dDtcbiAgfTtcblxuICByZXR1cm4gUmVhY3RET01TZXJ2ZXJSZW5kZXJlcjtcbn0oKTtcblxuLyoqXG4gKiBSZW5kZXIgYSBSZWFjdEVsZW1lbnQgdG8gaXRzIGluaXRpYWwgSFRNTC4gVGhpcyBzaG91bGQgb25seSBiZSB1c2VkIG9uIHRoZVxuICogc2VydmVyLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1kb20tc2VydmVyLmh0bWwjcmVuZGVydG9zdHJpbmdcbiAqL1xuXG5mdW5jdGlvbiByZW5kZXJUb1N0cmluZyhlbGVtZW50KSB7XG4gIHZhciByZW5kZXJlciA9IG5ldyBSZWFjdERPTVNlcnZlclJlbmRlcmVyKGVsZW1lbnQsIGZhbHNlKTtcblxuICB0cnkge1xuICAgIHZhciBtYXJrdXAgPSByZW5kZXJlci5yZWFkKEluZmluaXR5KTtcbiAgICByZXR1cm4gbWFya3VwO1xuICB9IGZpbmFsbHkge1xuICAgIHJlbmRlcmVyLmRlc3Ryb3koKTtcbiAgfVxufVxuLyoqXG4gKiBTaW1pbGFyIHRvIHJlbmRlclRvU3RyaW5nLCBleGNlcHQgdGhpcyBkb2Vzbid0IGNyZWF0ZSBleHRyYSBET00gYXR0cmlidXRlc1xuICogc3VjaCBhcyBkYXRhLXJlYWN0LWlkIHRoYXQgUmVhY3QgdXNlcyBpbnRlcm5hbGx5LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1kb20tc2VydmVyLmh0bWwjcmVuZGVydG9zdGF0aWNtYXJrdXBcbiAqL1xuXG5mdW5jdGlvbiByZW5kZXJUb1N0YXRpY01hcmt1cChlbGVtZW50KSB7XG4gIHZhciByZW5kZXJlciA9IG5ldyBSZWFjdERPTVNlcnZlclJlbmRlcmVyKGVsZW1lbnQsIHRydWUpO1xuXG4gIHRyeSB7XG4gICAgdmFyIG1hcmt1cCA9IHJlbmRlcmVyLnJlYWQoSW5maW5pdHkpO1xuICAgIHJldHVybiBtYXJrdXA7XG4gIH0gZmluYWxseSB7XG4gICAgcmVuZGVyZXIuZGVzdHJveSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRvTm9kZVN0cmVhbSgpIHtcbiAge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKFwiUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9Ob2RlU3RyZWFtKCk6IFRoZSBzdHJlYW1pbmcgQVBJIGlzIG5vdCBhdmFpbGFibGUgaW4gdGhlIGJyb3dzZXIuIFVzZSBSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0cmluZygpIGluc3RlYWQuXCIpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJUb1N0YXRpY05vZGVTdHJlYW0oKSB7XG4gIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvcihcIlJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTm9kZVN0cmVhbSgpOiBUaGUgc3RyZWFtaW5nIEFQSSBpcyBub3QgYXZhaWxhYmxlIGluIHRoZSBicm93c2VyLiBVc2UgUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdGF0aWNNYXJrdXAoKSBpbnN0ZWFkLlwiKTtcbiAgICB9XG4gIH1cbn0gLy8gTm90ZTogd2hlbiBjaGFuZ2luZyB0aGlzLCBhbHNvIGNvbnNpZGVyIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTE1MjZcblxuXG52YXIgUmVhY3RET01TZXJ2ZXJCcm93c2VyID0ge1xuICByZW5kZXJUb1N0cmluZzogcmVuZGVyVG9TdHJpbmcsXG4gIHJlbmRlclRvU3RhdGljTWFya3VwOiByZW5kZXJUb1N0YXRpY01hcmt1cCxcbiAgcmVuZGVyVG9Ob2RlU3RyZWFtOiByZW5kZXJUb05vZGVTdHJlYW0sXG4gIHJlbmRlclRvU3RhdGljTm9kZVN0cmVhbTogcmVuZGVyVG9TdGF0aWNOb2RlU3RyZWFtLFxuICB2ZXJzaW9uOiBSZWFjdFZlcnNpb25cbn07XG5cbnZhciBSZWFjdERPTVNlcnZlckJyb3dzZXIkMSA9IE9iamVjdC5mcmVlemUoe1xuXHRkZWZhdWx0OiBSZWFjdERPTVNlcnZlckJyb3dzZXJcbn0pO1xuXG52YXIgUmVhY3RET01TZXJ2ZXIgPSAoIFJlYWN0RE9NU2VydmVyQnJvd3NlciQxICYmIFJlYWN0RE9NU2VydmVyQnJvd3NlciApIHx8IFJlYWN0RE9NU2VydmVyQnJvd3NlciQxO1xuXG4vLyBUT0RPOiBkZWNpZGUgb24gdGhlIHRvcC1sZXZlbCBleHBvcnQgZm9ybS5cbi8vIFRoaXMgaXMgaGFja3kgYnV0IG1ha2VzIGl0IHdvcmsgd2l0aCBib3RoIFJvbGx1cCBhbmQgSmVzdFxuXG5cbnZhciBzZXJ2ZXJfYnJvd3NlciA9IFJlYWN0RE9NU2VydmVyLmRlZmF1bHQgfHwgUmVhY3RET01TZXJ2ZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gc2VydmVyX2Jyb3dzZXI7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtZG9tLXNlcnZlci5icm93c2VyLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWRvbS1zZXJ2ZXIuYnJvd3Nlci5kZXZlbG9wbWVudC5qcycpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==