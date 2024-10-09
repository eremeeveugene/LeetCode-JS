/**
 * Time complexity - O(1)
 * Space complexity - O(1)
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
  return args.length;
};

module.exports = argumentsLength;
