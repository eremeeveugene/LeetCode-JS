/**
 * https://leetcode.com/problems/sleep/description/
 * Time complexity - O(1)
 * Space complexity - O(1)
 * @param {number} millis
 * @return {Promise}
 */
function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

module.exports = sleep;
