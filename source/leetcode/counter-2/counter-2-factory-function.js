/**
 * Time complexity - O(1)
 * Space complexity - O(1)
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let currentValue = init;

  return {
    increment: () => {
      return ++currentValue;
    },
    decrement: () => {
      return --currentValue;
    },
    reset: () => {
      currentValue = init;

      return currentValue;
    },
  };
};

module.exports = createCounter;
