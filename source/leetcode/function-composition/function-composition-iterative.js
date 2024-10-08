/**
 * Time complexity - O(n)
 * Space complexity - O(1)
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    for (let i = functions.length - 1; i >= 0; i--) {
      x = functions[i](x);
    }

    return x;
  };
};

module.exports = compose;
