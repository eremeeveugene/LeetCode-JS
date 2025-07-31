/**
 * https://leetcode.com/problems/allow-one-function-call/description/
 * Time complexity - O(1)
 * Space complexity - O(1)
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let isCalled = false;

  return function (...args) {
    if (isCalled) {
      return undefined;
    }

    isCalled = true;

    return fn(...args);
  };
};

export default once;
