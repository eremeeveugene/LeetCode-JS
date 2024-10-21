/**
 * https://leetcode.com/problems/array-prototype-last/description/
 * Time complexity - O(1)
 * Space complexity - O(1)
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = last;

function last() {
  if (this.length > 0) {
    return this.at(this.length - 1);
  }

  return -1;
}

module.exports = last;
