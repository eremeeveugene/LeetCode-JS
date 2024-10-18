/**
 * https://leetcode.com/problems/interval-cancellation/description/
 * Time complexity - O(1)
 * Space complexity - O(1)
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  fn(...args);

  let timeoutId;

  const run = () => {
    timeoutId = setTimeout(() => {
      fn(...args);
      run();
    }, t);
  };

  run();

  return function () {
    clearTimeout(timeoutId);
  };
};

module.exports = cancellable;
