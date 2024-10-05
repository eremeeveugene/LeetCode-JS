/**
 * Time complexity - O(1)
 * Space complexity - O(1)
 * @param {string} val
 * @return {Object}
 */
var expect = (expectedValue) => new Expectation(expectedValue);

class Expectation {
  constructor(expectedValue) {
    this.expectedValue = expectedValue;
  }

  toBe(actualValue) {
    if (this.expectedValue === actualValue) {
      return true;
    } else {
      throw new Error("Not Equal");
    }
  }

  notToBe(actualValue) {
    if (this.expectedValue !== actualValue) {
      return true;
    } else {
      throw new Error("Equal");
    }
  }
}

module.exports = expect;
