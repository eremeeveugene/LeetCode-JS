/**
 * Time complexity - O(1)
 * Space complexity - O(1)
 * @param {string} val
 * @return {Object}
 */
var expect = function (expectedValue) {
  return {
    toBe: (actualValue) => {
      if (expectedValue === actualValue) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: (actualValue) => {
      if (expectedValue !== actualValue) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

module.exports = expect;
