/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import charsLeftIndex from '../internals/charsLeftIndex';
import charsRightIndex from '../internals/charsRightIndex';
import trimmedLeftIndex from '../internals/trimmedLeftIndex';
import trimmedRightIndex from '../internals/trimmedRightIndex';

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @category Strings
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trim('  fred  ');
 * // => 'fred'
 *
 * _.trim('-_-fred-_-', '_-');
 * // => 'fred'
 */
function trim(string, chars) {
  string = string == null ? '' : String(string);
  if (!string) {
    return string;
  }
  if (chars == null) {
    return string.slice(trimmedLeftIndex(string), trimmedRightIndex(string) + 1);
  }
  chars = String(chars);
  return string.slice(charsLeftIndex(string, chars), charsRightIndex(string, chars) + 1);
}

export default trim;
