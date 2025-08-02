class Calculator {
  /**
   * @param {number} value
   */
  constructor(value) {
    this.result = value;
  }

  /**
   * Time complexity - O(1)
   * Space complexity - O(1)
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    this.result += value;

    return this;
  }

  /**
   * Time complexity - O(1)
   * Space complexity - O(1)
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    this.result -= value;

    return this;
  }

  /**
   * Time complexity - O(1)
   * Space complexity - O(1)
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    this.result *= value;

    return this;
  }

  /**
   * Time complexity - O(1)
   * Space complexity - O(1)
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (value == 0) {
      throw new Error("Division by zero is not allowed");
    }

    this.result /= value;

    return this;
  }

  /**
   * Time complexity - O(1)
   * Space complexity - O(1)
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    this.result = Math.pow(this.result, value);

    return this;
  }

  /**
   * Time complexity - O(1)
   * Space complexity - O(1)
   * @return {number}
   */
  getResult() {
    return this.result;
  }
}

export default Calculator;
