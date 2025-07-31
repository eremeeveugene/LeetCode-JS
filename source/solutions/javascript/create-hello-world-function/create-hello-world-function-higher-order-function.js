/**
 * https://leetcode.com/problems/create-hello-world-function/description/
 * Time complexity: O(1)
 * Space complexity: O(1)
 * @returns {function}
 */
var createHelloWorld = function () {
  return function () {
    return "Hello World";
  };
};

export default createHelloWorld;
