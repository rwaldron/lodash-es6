/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="es6" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import isNative from './internals/isNative';

/** Used to detect functions containing a `this` reference */
var reThis = /\bthis\b/;

/** Used for native method references */
var objectProto = Object.prototype;

/** Used to detect DOM support */
var document = (document = root.window) && document.document;

/** Native method shortcuts */
var hasOwnProperty = objectProto.hasOwnProperty,
    propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * An object used to flag environments features.
 *
 * @static
 * @memberOf _
 * @type Object
 */
var support = {};

(function(x) {

  for (var argsKey in arguments) { }

  /**
   * Detect if functions can be decompiled by `Function#toString`
   * (all but PS3 and older Opera mobile browsers & avoided in Windows 8 apps).
   *
   * @memberOf _.support
   * @type boolean
   */
  support.funcDecomp = !isNative(root.WinRTError) && reThis.test(function() { return this; });

  /**
   * Detect if `Function#name` is supported (all but IE).
   *
   * @memberOf _.support
   * @type boolean
   */
  support.funcNames = typeof Function.name == 'string';

  /**
   * Detect if `arguments` object indexes are non-enumerable
   * (Firefox < 4, IE < 9, PhantomJS, Safari < 5.1).
   *
   * Chrome < 25 and Node.js < 0.11.0 will treat `arguments` object indexes
   * that exceed their function's formal parameters and whose associated
   * values are `0` as non-enumerable and incorrectly return `false` from
   * `Object#hasOwnProperty`.
   *
   * @memberOf _.support
   * @type boolean
   */
  support.nonEnumArgs = !(argsKey == '1' && hasOwnProperty.call(arguments, '1') &&
    propertyIsEnumerable.call(arguments, '1'));

  /**
   * Detect if the DOM is supported.
   *
   * @memberOf _.support
   * @type boolean
   */
  try {
    support.dom = document.createDocumentFragment().nodeType === 11;
  } catch(e) {
    support.dom = false;
  }
}(0, 0));

export default support;
