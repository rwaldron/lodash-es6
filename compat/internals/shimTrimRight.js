/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import charsRightIndex from './charsRightIndex';
import trimmedRightIndex from './trimmedRightIndex';

/**
 * A fallback implementation of `String#trimRight` to remove trailing whitespace or
 * specified characters from `string`.
 *
 * @private
 * @param {string} string The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @returns {string} Returns the trimmed string.
 */
function shimTrimRight(string, chars) {
  string = string == null ? '' : String(string);
  if (!string) {
    return string;
  }
  if (chars == null) {
    return string.slice(0, trimmedRightIndex(string) + 1)
  }
  chars = String(chars);
  return string.slice(0, charsRightIndex(string, chars) + 1);
}

export default shimTrimRight;
