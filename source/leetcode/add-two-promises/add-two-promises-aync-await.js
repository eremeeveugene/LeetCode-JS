/**
 * https://leetcode.com/problems/add-two-promises/description/
 * Time complexity - O(t1 + t2), where t1 is the time to resolve promise1 and t2 is the time to resolve promise2
 * Space complexity - O(1)
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  const num1 = await promise1;
  const num2 = await promise2;

  return num1 + num2;
};

module.exports = addTwoPromises;
