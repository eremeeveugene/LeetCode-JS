/**
 * Time complexity: O(1)
 * Space complexity: O(1)
 * @returns {function} A function that returns "Hello World".
 */
var createHelloWorld = function () {
  return function () {
    return "Hello World";
  };
};

module.exports = createHelloWorld;
