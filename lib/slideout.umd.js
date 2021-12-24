(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["slideout"] = factory();
	else
		root["slideout"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "02f4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var defined = __webpack_require__("be13");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "0390":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("02f4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("b0c5");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");
var regexpExec = __webpack_require__("520a");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var $toString = __webpack_require__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "3846":
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__("9e1e") && /./g.flags != 'g') __webpack_require__("86cc").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__("0bfb")
});


/***/ }),

/***/ "386b":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "520a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("0bfb");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "5f1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("23c6");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6b54":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("3846");
var anObject = __webpack_require__("cb7c");
var $flags = __webpack_require__("0bfb");
var DESCRIPTORS = __webpack_require__("9e1e");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__("2aba")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__("79e5")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7f7f":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("9e1e") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a481":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("cb7c");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var toInteger = __webpack_require__("4588");
var advanceStringIndex = __webpack_require__("0390");
var regExpExec = __webpack_require__("5f1b");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__("214f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "a4b1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "b0c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("520a");
__webpack_require__("5ca1")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c5f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var cof = __webpack_require__("2d95");
var inheritIfRequired = __webpack_require__("5dbc");
var toPrimitive = __webpack_require__("6a99");
var fails = __webpack_require__("79e5");
var gOPN = __webpack_require__("9093").f;
var gOPD = __webpack_require__("11e9").f;
var dP = __webpack_require__("86cc").f;
var $trim = __webpack_require__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__("386b")('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c09dc048-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Template.vue?vue&type=template&id=2cfde9b7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-slideout",class:_vm.containerClasses,style:(_vm.containerStyle),attrs:{"tabindex":"0"}},[(_vm.showMask)?_c('div',{staticClass:"vue-slideout-mask",style:(_vm.maskStyle),on:{"click":_vm.onMaskClick}}):_vm._e(),(!_vm.renderWhenVisible || _vm.isVisible)?_c('div',{ref:"layout",staticClass:"vue-slideout-layout",style:(_vm.layoutStyle)},[(_vm.allowResize && !_vm.isFullscreen && !_vm.isSizeFixed)?_c('div',{staticClass:"vue-slideout-drag-handle",on:{"mousedown":_vm.mouseDownHandler}}):_vm._e(),(_vm.showHeader)?_c('div',{staticClass:"vue-slideout-header"},[_vm._t("header",function(){return [_c('div',{staticClass:"vue-slideout-title-text"},[_vm._v("\n          "+_vm._s(_vm.title)+"\n        ")]),_c('div',{ref:"buttons",staticClass:"vue-slideout-title-buttons"},[_c('span',{staticClass:"vue-slideout-custom-buttons"},[_vm._t("btn")],2),_c('span',{staticClass:"vue-slideout-default-buttons"},[(_vm.showFullscreen)?_c('button',{staticClass:"vue-slideout-btn-fullscreen",on:{"click":function($event){return _vm.toggleFullscreen()}}},[_c('icon-fullscreen'),_c('icon-fullscreen-exit')],1):_vm._e(),(_vm.showClose)?_c('button',{staticClass:"vue-slideout-btn-close",on:{"click":function($event){return _vm.toggleVisible(false)}}},[(_vm.arrowButton)?_c('icon-arrow'):_c('icon-cross')],1):_vm._e()])])]},{"title":_vm.title})],2):_vm._e(),_c('div',{staticClass:"vue-slideout-content"},[_vm._t("default")],2),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.$slots.footer),expression:"$slots.footer"}],staticClass:"vue-slideout-footer"},[_vm._t("footer")],2)]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Template.vue?vue&type=template&id=2cfde9b7&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c09dc048-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/icon/IconArrow.vue?vue&type=template&id=14a8000c&
var IconArrowvue_type_template_id_14a8000c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"version":"1.1","viewBox":"0 0 1024 1024","xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16"}},[_c('path',{attrs:{"d":"M493.45411 71.89033 197.751365 361.596502c-9.624195 9.380648-9.624195 24.707728 0 34.138518 9.576099 9.381671 25.222451 9.381671 34.848693 0l253.612115-248.494561 0 786.690176c0 13.3214 11.047614 24.142863 24.642237 24.142863 13.597693 0 24.645306-10.821463 24.645306-24.142863L535.499715 147.240459l253.632581 248.494561c9.603729 9.381671 25.248034 9.381671 34.847669 0 4.836145-4.76349 7.194866-10.939143 7.194866-17.116843 0-6.1777-2.405793-12.355399-7.194866-17.116843L528.255731 71.797209c-9.602705-9.383718-25.244964-9.383718-34.849716 0L493.45411 71.89033z"}})])}
var IconArrowvue_type_template_id_14a8000c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/icon/IconArrow.vue?vue&type=template&id=14a8000c&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/icon/IconArrow.vue

var script = {}


/* normalize component */

var component = normalizeComponent(
  script,
  IconArrowvue_type_template_id_14a8000c_render,
  IconArrowvue_type_template_id_14a8000c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IconArrow = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c09dc048-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/icon/IconCross.vue?vue&type=template&id=2624de50&
var IconCrossvue_type_template_id_2624de50_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"version":"1.1","viewBox":"0 0 1024 1024","xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16"}},[_c('path',{attrs:{"d":"M184.64768 836.34176c3.9936 3.9936 9.23648 5.98016 14.47936 5.98016 5.24288 0 10.48576-2.00704 14.49984-6.00064l292.70016-293.04832 292.70016 293.04832c3.9936 4.01408 9.23648 6.00064 14.49984 6.00064 5.24288 0 10.48576-2.00704 14.47936-5.98016 8.00768-7.9872 8.00768-20.95104 0.02048-28.95872L535.61344 514.64192 828.0064 221.92128c7.9872-8.00768 7.9872-20.97152-0.02048-28.95872-8.02816-8.00768-20.97152-8.00768-28.95872 0.02048L506.30656 486.03136 213.6064 192.98304c-8.00768-8.00768-20.97152-8.00768-28.95872-0.02048-8.00768 7.9872-8.00768 20.95104-0.02048 28.95872l292.37248 292.72064L184.6272 807.38304C176.64 815.37024 176.64 828.35456 184.64768 836.34176z"}})])}
var IconCrossvue_type_template_id_2624de50_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/icon/IconCross.vue?vue&type=template&id=2624de50&

// CONCATENATED MODULE: ./src/components/icon/IconCross.vue

var IconCross_script = {}


/* normalize component */

var IconCross_component = normalizeComponent(
  IconCross_script,
  IconCrossvue_type_template_id_2624de50_render,
  IconCrossvue_type_template_id_2624de50_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IconCross = (IconCross_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c09dc048-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/icon/IconFullscreen.vue?vue&type=template&id=409c0e99&
var IconFullscreenvue_type_template_id_409c0e99_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"version":"1.1","viewBox":"0 0 1024 1024","xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16"}},[_c('path',{attrs:{"d":"M258.285714 197.028571l50.171429-50.171428a9.154286 9.154286 0 0 0-5.371429-15.542857L120 109.714286c-5.828571-0.685714-10.857143 4.228571-10.171429 10.171428L131.428571 302.971429c0.914286 7.542857 10.171429 10.742857 15.542858 5.371428l49.942857-49.942857L349.714286 411.085714c3.542857 3.542857 9.371429 3.542857 12.914285 0l48.457143-48.342857c3.542857-3.542857 3.542857-9.371429 0-12.914286L258.285714 197.028571z m403.085715 214.057143c3.542857 3.542857 9.371429 3.542857 12.914285 0l152.8-152.685714 49.942857 49.942857a9.154286 9.154286 0 0 0 15.542858-5.371428L914.171429 120c0.685714-5.828571-4.228571-10.857143-10.171429-10.171429L720.914286 131.428571c-7.542857 0.914286-10.742857 10.171429-5.371429 15.542858l50.171429 50.171428L612.914286 349.714286a9.177143 9.177143 0 0 0 0 12.914285l48.457143 48.457143zM892.571429 721.028571c-0.914286-7.542857-10.171429-10.742857-15.542858-5.371428l-49.942857 49.942857L674.285714 612.914286a9.177143 9.177143 0 0 0-12.914285 0l-48.457143 48.342857a9.177143 9.177143 0 0 0 0 12.914286L765.714286 826.971429l-50.171429 50.171428a9.154286 9.154286 0 0 0 5.371429 15.542857L904 914.285714c5.828571 0.685714 10.857143-4.228571 10.171429-10.171428L892.571429 721.028571z m-529.942858-108.114285a9.177143 9.177143 0 0 0-12.914285 0L196.914286 765.6l-49.942857-49.942857a9.154286 9.154286 0 0 0-15.542858 5.371428L109.828571 904c-0.685714 5.828571 4.228571 10.857143 10.171429 10.171429L303.085714 892.571429c7.542857-0.914286 10.742857-10.171429 5.371429-15.542858L258.285714 826.971429 411.085714 674.285714c3.542857-3.542857 3.542857-9.371429 0-12.914285l-48.457143-48.457143z"}})])}
var IconFullscreenvue_type_template_id_409c0e99_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/icon/IconFullscreen.vue?vue&type=template&id=409c0e99&

// CONCATENATED MODULE: ./src/components/icon/IconFullscreen.vue

var IconFullscreen_script = {}


/* normalize component */

var IconFullscreen_component = normalizeComponent(
  IconFullscreen_script,
  IconFullscreenvue_type_template_id_409c0e99_render,
  IconFullscreenvue_type_template_id_409c0e99_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IconFullscreen = (IconFullscreen_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c09dc048-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/icon/IconFullscreenExit.vue?vue&type=template&id=ed42fa6a&
var IconFullscreenExitvue_type_template_id_ed42fa6a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"version":"1.1","viewBox":"0 0 1024 1024","xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16"}},[_c('path',{attrs:{"d":"M391 240.9c-0.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L200 146.3c-3.1-3.1-8.2-3.1-11.3 0l-42.4 42.3c-3.1 3.1-3.1 8.2 0 11.3L280 333.6l-43.9 43.9c-4.7 4.7-1.9 12.8 4.7 13.6L401 410c5.1 0.6 9.5-3.7 8.9-8.9L391 240.9zM401.1 614.1L240.8 633c-6.6 0.8-9.4 8.9-4.7 13.6l43.9 43.9L146.3 824c-3.1 3.1-3.1 8.2 0 11.3l42.4 42.3c3.1 3.1 8.2 3.1 11.3 0L333.7 744l43.7 43.7c4.7 4.7 12.8 1.9 13.6-4.7l18.9-160.1c0.6-5.1-3.7-9.4-8.8-8.8zM622.9 409.9L783.2 391c6.6-0.8 9.4-8.9 4.7-13.6L744 333.6 877.7 200c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.3c-3.1-3.1-8.2-3.1-11.3 0L690.3 279.9l-43.7-43.7c-4.7-4.7-12.8-1.9-13.6 4.7L614.1 401c-0.6 5.2 3.7 9.5 8.8 8.9zM744 690.4l43.9-43.9c4.7-4.7 1.9-12.8-4.7-13.6L623 614c-5.1-0.6-9.5 3.7-8.9 8.9L633 783.1c0.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L824 877.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L744 690.4z"}})])}
var IconFullscreenExitvue_type_template_id_ed42fa6a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/icon/IconFullscreenExit.vue?vue&type=template&id=ed42fa6a&

// CONCATENATED MODULE: ./src/components/icon/IconFullscreenExit.vue

var IconFullscreenExit_script = {}


/* normalize component */

var IconFullscreenExit_component = normalizeComponent(
  IconFullscreenExit_script,
  IconFullscreenExitvue_type_template_id_ed42fa6a_render,
  IconFullscreenExitvue_type_template_id_ed42fa6a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IconFullscreenExit = (IconFullscreenExit_component.exports);
// EXTERNAL MODULE: ./src/styles/index.less
var styles = __webpack_require__("a4b1");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.fixed.js
var es6_string_fixed = __webpack_require__("d263");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("6b54");

// CONCATENATED MODULE: ./src/components/computed.js



/* harmony default export */ var computed = ({
  computed: {
    // 停靠边，当未指定时，设置为默认值 right
    dockOn: function dockOn() {
      return this.dock || 'right';
    },
    showHeader: function showHeader() {
      return this.title || this.$slots.header;
    },
    showFooter: function showFooter() {
      return this.$slots.footer;
    },
    // SlideOut 容器样式
    containerStyle: function containerStyle() {
      var style = {
        // 2147483647 是允许的最大值
        // 'z-index': this.isFullscreen ? 2147483647 : this.zIndex,
        'z-index': this.zIndex,
        display: this.showContainer ? 'block' : 'none'
      };

      if (this.mousedown) {
        style.userSelect = 'none';
      }

      return style;
    },
    // SlideOut 遮罩层样式
    maskStyle: function maskStyle() {
      return this.maskColor ? {
        'background-color': this.maskColor
      } : {};
    },
    // 是否使用固定大小，判断依据：指定的大小是一个数组
    isSizeFixed: function isSizeFixed() {
      return Array.isArray(this.size);
    },
    isAutoSize: function isAutoSize() {
      if (this.isSizeFixed) {
        return !this.size.every(function (i) {
          return i.toString() !== '0';
        });
      }

      return this.size.toString() === '0';
    },

    /**
     * 获取带上单位的size值
     * @return {Array|String}
     */
    sizeWithUnit: function sizeWithUnit() {
      if (!this.isSizeFixed) {
        return this._fixSizeUnit(this.size);
      }

      return [this._fixSizeUnit(this.size[0]), this._fixSizeUnit(this.size[this.size.length === 1 ? 0 : 1])];
    },
    // SlideOut 内容样式
    layoutStyle: function layoutStyle() {
      var style = {};

      if (this.isSizeFixed) {
        // 指定大小
        style.width = this.sizeWithUnit[0];
        style.height = this.sizeWithUnit[1]; // 偏移量，当全屏时偏移量为 0

        var offset = this.isFullscreen ? 0 : this.offset;

        switch (this.dockOn) {
          case 'right':
          case 'left':
            style.top = offset;
            style.maxHeight = "calc(100% - ".concat(offset, ")");
            break;

          case 'bottom':
          case 'top':
            style.left = offset;
            style.maxWidth = "calc(100% - ".concat(offset, ")");
            break;
        }

        return style;
      } // 内容显示大小
      // 当全屏时，设置为 100%


      var size = this.isFullscreen ? '100%' : this.resizeValue > 0 ? "".concat(this.resizeValue, "px") : this.sizeWithUnit;

      switch (this.dockOn) {
        case 'right':
        case 'left':
          style.width = size;
          break;

        case 'bottom':
        case 'top':
          style.height = size;
          break;
      }

      return style;
    },
    // 容器需要应用的样式类
    containerClasses: function containerClasses() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, this.customClass || '', true), _defineProperty(_ref, "vue-slideout-dock-".concat(this.dockOn), true), _defineProperty(_ref, 'vue-slideout-visible', this.activeVisibleClass), _defineProperty(_ref, 'vue-slideout-enable-animation', !this.mousedown && !this.disableAnimation), _defineProperty(_ref, 'vue-slideout-show-header', this.showHeader), _defineProperty(_ref, 'vue-slideout-show-footer', this.$slots.footer), _defineProperty(_ref, 'vue-slideout-allow-resize', this.allowResize), _defineProperty(_ref, 'vue-slideout-fixed', this.isFixed), _defineProperty(_ref, 'vue-slideout-fullscreen', this.isFullscreen), _defineProperty(_ref, 'vue-slideout-autosize', this.isAutoSize), _ref;
    },
    // 是否使用固定定位
    isFixed: function isFixed() {
      // 设置了 appendTo 的时候，就不固定显示
      // 但是如果父元素为 body 时，也需要固定显示
      return this.fixed || this.parentElement === document.body || !this.appendTo;
    }
  }
});
// CONCATENATED MODULE: ./src/components/data.js
/* harmony default export */ var data = ({
  data: function data() {
    return {
      isVisible: false,
      isFullscreen: false,
      // 标识鼠标是否按下，仅按下时能拖动大小
      mousedown: false,
      // 鼠标按下时的位置
      mouseDownPosition: {
        x: 0,
        y: 0
      },
      // 弹出的原始大小
      originSize: {
        width: 0,
        height: 0
      },
      // 调整大小时的值，单位为px
      resizeValue: 0,
      // 父级元素
      parentElement: null,
      // 扩展按钮容器
      headerButtons: null,
      // 动画时长
      animationDuration: 312,
      // 是否激活 active 类
      activeVisibleClass: false,
      showContainer: false
    };
  }
});
// CONCATENATED MODULE: ./src/components/methods.js

/* harmony default export */ var methods = ({
  methods: {
    /**
     * 获取关闭事件参数对象
     */
    getCloseArgs: function getCloseArgs() {
      var me = this; // 通过使用 setter 以实现延迟操作

      return {
        // 是否等待操作
        wait: false,

        set close(close) {
          // 取消关闭
          if (!close) {
            return;
          } // 关闭


          me.setVisibleValue(false);
        },

        get close() {
          return undefined;
        }

      };
    },

    /**
     * 切换显示状态
     * @param {Boolean} [visible] 指定显示状态，不指定时切换状态
     */
    toggleVisible: function toggleVisible(visible) {
      var _this = this;

      if (visible === this.isVisible) {
        return;
      }

      if (visible) {
        // 显示前触发事件
        var _args = {
          cancel: false
        };
        this.$emit('before-open', _args); // 取消打开

        if (_args.cancel) {
          // 取消时，重置原值为 false
          this.$emit('update:visible', false);
          return;
        }

        this.setVisibleValue(true); // 显示后触发事件

        this.$nextTick(function () {
          _this.emitOpenEvent(); // 在组件显示后让组件获取焦点


          _this.$el.focus();
        });
        return;
      } // 隐藏前触发事件


      var args = this.getCloseArgs();
      this.$emit('close', args);

      if (args.wait) {
        // 取消时，重置原值为 true
        this.$emit('update:visible', true); // 需要等待，最终是否关闭要看 args.close 是否为 true

        return;
      }

      this.setVisibleValue(false);
    },

    /**
     * 切换全屏
     */
    toggleFullscreen: function toggleFullscreen(fullscreen) {
      if (fullscreen === undefined) {
        this.isFullscreen = !this.isFullscreen;
      } else if (this.isFullscreen === fullscreen) {
        return;
      } else {
        this.isFullscreen = fullscreen;
      }

      this.$emit('update:fullscreen', this.isFullscreen);
    },

    /**
     * 设置显示状态
     * @param {Boolean} visible 显示状态
     */
    setVisibleValue: function setVisibleValue(visible) {
      var _this2 = this;

      // 如果显示状态相同，则啥也不做
      if (this.isVisible === visible) {
        return;
      } // 显示时重置大小


      if (visible) {
        this.resizeValue = 0;
      }

      this.$emit('update:visible', visible);

      if (visible) {
        this.showContainer = true;
        this.isVisible = true;
        this.$nextTick(function () {
          // 延时应用动画
          setTimeout(function () {
            _this2.activeVisibleClass = true;
          }, 10);
        });
      } else {
        // 若指定了 .sync 修饰，则关闭后退出全屏
        this.$emit('update:fullscreen', false);
        this.activeVisibleClass = false; // 触发关闭后的事件

        this.$nextTick(this.emitCloseEvent);
      }
    },

    /**
     * 计算出组件在DOM中的父元素
     */
    appendComponentTo: function appendComponentTo() {
      if (!this.appendTo) {
        this.parentElement = this.$el.parentElement;
        return;
      }

      var target = this.appendTo; // handle selector

      if (typeof target === 'string') {
        target = document.querySelector(target);

        if (!target) {
          throw new Error("[vue-slideout] Cannot find the node to append: ".concat(this.appendTo));
        }
      } // @see https://vuejs.org/v2/api/index.html#vm-mount


      target.appendChild(this.$mount().$el);
      this.parentElement = target;
    },

    /**
     * 点击遮罩层时的事件处理
     */
    onMaskClick: function onMaskClick() {
      if (this.closeOnMaskClick) {
        this.toggleVisible(false);
      }
    },

    /**
     * 获取父元素的尺寸
     * @return {{width: Number, height: Number}}
     */
    getParentSize: function getParentSize() {
      var rect = this.parentElement.getClientRects()[0];
      return {
        width: rect.width,
        height: rect.height
      };
    },

    /**
     * 获取到此组件的大小（基于px）
     * @return {{width: Number, height: Number}}
     */
    getMyOwnSize: function getMyOwnSize() {
      var rect = this.$refs.layout.getClientRects()[0];
      return {
        width: rect.width,
        height: rect.height
      };
    },
    mouseDownHandler: function mouseDownHandler(e) {
      if (this.isFullscreen) {
        // 全屏时不允许改变大小
        return;
      }

      this.mousedown = true;
      this.mouseDownPosition = {
        x: e.pageX,
        y: e.pageY
      };
      this.originSize = this.getMyOwnSize();
    },
    mouseMoveHandler: function mouseMoveHandler(e) {
      var _this3 = this;

      if (this.isFullscreen) {
        // 全屏时不允许改变大小
        return;
      } // 鼠标未按下时，不能拖动


      if (!this.mousedown) {
        return;
      }

      e.preventDefault(); // 获取鼠标的偏移量

      var x = e.pageX - this.mouseDownPosition.x;
      var y = e.pageY - this.mouseDownPosition.y;
      var parentSize = this.getParentSize();
      var winSize = {
        width: window.innerWidth,
        height: window.innerHeight
      };
      var size = this.originSize;
      var newSize = 0;

      switch (this.dock) {
        case 'top':
          newSize = size.height + y;

          if (newSize > parentSize.height) {
            newSize = parentSize.height;
          }

          if (newSize > winSize.height) {
            newSize = winSize.height;
          }

          break;

        case 'right':
          newSize = size.width - x;

          if (newSize > parentSize.width) {
            newSize = parentSize.width;
          }

          if (newSize > winSize.width) {
            newSize = winSize.width;
          }

          break;

        case 'bottom':
          newSize = size.height - y;

          if (newSize > parentSize.height) {
            newSize = parentSize.height;
          }

          if (newSize > winSize.height) {
            newSize = winSize.height;
          }

          break;

        case 'left':
          newSize = size.width + x;

          if (newSize > parentSize.width) {
            newSize = parentSize.width;
          }

          if (newSize > winSize.width) {
            newSize = winSize.width;
          }

          break;
      }

      if (this.maxSize > 0 && this.maxSize < newSize) {
        newSize = this.maxSize;
      }

      requestAnimationFrame(function () {
        _this3.resizeValue = newSize < _this3.minSize ? _this3.minSize : newSize;
      });
      this.$nextTick(function () {
        _this3.$emit('resize', {
          size: _this3.resizeValue
        });
      });
    },
    mouseUpHandler: function mouseUpHandler() {
      this.mousedown = false;
    },
    onKeydown: function onKeydown(e) {
      if (!this.isVisible) {
        return;
      }

      if (e.code !== 27 && e.keyCode !== 27 && e.which !== 27) {
        return;
      } // 忽略输入组件


      if (['INPUT', 'TEXTAREA'].indexOf(e.target.tagName) !== -1 || e.target.contentEditable === 'true') {
        return;
      }

      this.toggleVisible(false);
      return false;
    },
    emitOpenEvent: function emitOpenEvent() {
      var _this4 = this;

      if (this.disableAnimation) {
        // 禁用动画时不需要等待
        this.$emit('open', this.$refs.layout);
        return;
      } // 开启动画时，有个this.animationDuration ms的动画


      setTimeout(function () {
        _this4.$emit('open', _this4.$refs.layout);
      }, this.animationDuration);
    },
    emitCloseEvent: function emitCloseEvent() {
      var _this5 = this;

      if (this.disableAnimation) {
        // 禁用动画时不需要等待
        this.showContainer = false;
        this.isVisible = false;
        this.$emit('closed');
        return;
      } // 开启动画时，有个this.animationDuration / 2 ms的动画


      setTimeout(function () {
        _this5.showContainer = false;
        _this5.isVisible = false;

        _this5.$emit('closed');
      }, this.animationDuration);
    },
    _bindKeyboardEvent: function _bindKeyboardEvent() {
      if (!this.ignoreEsc) {
        this.$el.addEventListener('keydown', this.onKeydown);
      }
    },
    _removeKeyboardEvent: function _removeKeyboardEvent() {
      if (!this.ignoreEsc) {
        this.$el.removeEventListener('keydown', this.onKeydown);
      }
    },
    _fixSizeUnit: function _fixSizeUnit(val) {
      return val.toString() === '0' ? 'auto' : "".concat(parseInt(val)).concat(/%$/.test(val) ? '%' : 'px');
    }
  }
});
// CONCATENATED MODULE: ./src/components/watch.js
/* harmony default export */ var watch = ({
  watch: {
    // 当从外部改变visible时，切换显示状态
    visible: function visible(_visible) {
      this.toggleVisible(_visible);
    },
    // 当从外部改变fullscreen时，切换显示状态
    fullscreen: function fullscreen(_fullscreen) {
      this.toggleFullscreen(_fullscreen);
    },
    // 当从内部改变 isVisible时
    isVisible: function isVisible(v) {
      if (!this.isFixed) {
        // 非固定时，不需要锁定滚动
        return;
      } // 切换锁定样式类


      if (v) {
        document.body.classList.add('vue-slideout-lock-scroll');
      } else {
        document.body.classList.remove('vue-slideout-lock-scroll');
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Template.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var Templatevue_type_script_lang_js_ = ({
  name: 'SlideOut',
  mixins: [computed, data, methods, watch],
  components: {
    IconArrow: IconArrow,
    IconCross: IconCross,
    IconFullscreen: IconFullscreen,
    IconFullscreenExit: IconFullscreenExit
  },
  props: {
    /**
     * 滑出尺寸，单位为像素，当为数组时，表示设置宽度和高度
     * 第一个值表示宽度，第二个值表示高度，数组只有一个值时，表示宽度和高度相同
     */
    size: {
      type: [String, Number, Array],
      default: 400
    },

    /**
     * 是否允许拖动弹出大小
     */
    allowResize: {
      type: Boolean,
      default: false
    },

    /**
     * 拖动改变大小时的最小尺寸，单位为px，此值不影响size属性指定的大小
     */
    minSize: {
      type: Number,
      default: 100
    },

    /**
     * 拖动改变大小时的最大尺寸，单位为px，指定为0时不限制，此值不影响size属性指定的大小
     */
    maxSize: {
      type: Number,
      default: 0
    },

    /**
     * 层叠索引
     */
    zIndex: {
      type: Number,
      default: 1997
    },

    /**
     * 是否可见，可使用 .sync 修饰符
     */
    visible: {
      type: Boolean,
      default: false
    },

    /**
     * 显示的标题，传空时不显示标题栏
     */
    title: {
      type: String
    },

    /**
     * 自定义样式类
     */
    customClass: {
      type: String
    },

    /**
     * 是否显示遮罩层
     */
    showMask: {
      type: Boolean,
      default: true
    },

    /**
     * 遮罩层颜色
     */
    maskColor: {
      type: String,
      default: null
    },

    /**
     * 是否在点击mask时关闭
     */
    closeOnMaskClick: {
      type: Boolean,
      default: true
    },

    /**
     * 是否忽略ESC键，不忽略时按下ESC会关闭
     */
    ignoreEsc: {
      type: Boolean,
      default: false
    },

    /**
     * 停靠方向，默认右侧
     */
    dock: {
      type: String,
      default: 'right',
      validator: function validator(value) {
        return ['top', 'right', 'bottom', 'left'].indexOf(value) >= 0;
      }
    },

    /**
     * 将元素放置到指定元素下
     */
    appendTo: {
      type: [String, HTMLElement],
      default: null
    },

    /**
     * 是否禁用滑出动画，默认为false
     */
    disableAnimation: {
      type: Boolean,
      default: false
    },

    /**
     * 是否启用全屏显示
     */
    fullscreen: {
      type: Boolean,
      default: false
    },

    /**
     * 是否显示关闭按钮
     */
    showClose: {
      type: Boolean,
      default: true
    },

    /**
     * 是否显示全屏按钮
     */
    showFullscreen: {
      type: Boolean,
      default: false
    },

    /**
     * 是否固定显示（此时会隐藏滚动条）
     */
    fixed: {
      type: Boolean,
      default: false
    },

    /**
     * 距离dock(停靠)边的偏移量，单位可以是`px`或`%`
     */
    offset: {
      type: String,
      default: '0'
    },

    /**
     * 以箭头方式显示关闭按钮
     */
    arrowButton: {
      type: Boolean,
      default: true
    },

    /**
     * 是否在可见时才渲染内容
     */
    renderWhenVisible: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    this.isFullscreen = this.fullscreen;
    this.appendComponentTo();

    if (this.allowResize) {
      // 绑定鼠标事件
      document.addEventListener('mousemove', this.mouseMoveHandler);
      document.addEventListener('mouseup', this.mouseUpHandler);
    }

    this._bindKeyboardEvent();

    this.headerButtons = this.$slots.btn ? this.$refs.buttons : null;
  },
  beforeDestroy: function beforeDestroy() {
    this.showContainer = false;

    this._removeKeyboardEvent();

    if (this.allowResize) {
      // 移除事件
      document.removeEventListener('mousemove', this.mouseUpHandler);
      document.removeEventListener('mouseup', this.mouseMoveHandler);
    }

    if (this.isVisible) {
      this.setVisibleValue(false);
    } // 取消滚动锁定


    document.body.classList.remove('vue-slideout-lock-scroll');

    if (this.appendTo) {
      try {
        this.$el.parentElement.removeChild(this.$el);
      } catch (e) {// ignore
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Template.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Templatevue_type_script_lang_js_ = (Templatevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Template.vue





/* normalize component */

var Template_component = normalizeComponent(
  components_Templatevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Template = (Template_component.exports);
// CONCATENATED MODULE: ./src/components/index.js




function setDefaultProps(customize) {
  for (var prop in customize) {
    if (!customize.hasOwnProperty(prop)) {
      continue;
    } // 处理带下划线格式成驼峰


    prop = prop.replace(/-[a-z]/g, function (match) {
      return match[1].toUpperCase();
    });

    if (!Template.props.hasOwnProperty(prop)) {
      continue;
    }

    Template.props[prop]['default'] = customize[prop];
  }
}
/**
 *
 * @param Vue
 * @param defaults 通过 Vue.use 注册组件时，设置的组件默认值
 */


Template.install = function (Vue, defaults) {
  if (defaults) {
    setDefaultProps(defaults);
  }

  Vue.component(Template.name, Template);
};

/* harmony default export */ var components = (Template);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (components);



/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ })

/******/ })["default"];
});