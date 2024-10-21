function testLast(last) {
  describe("last", () => {
    // Use test.each for multiple cases
    test.each([
      [[null, {}, 3], 3], // Test with mixed array
      [[], -1], // Test with empty array
      [[1], 1], // Test with single-element array
      [[false, true, false], false], // Test with boolean values
      [["a", "b", "c"], "c"], // Test with string array
      [[null], null], // Test with null value
      [[{}, [], "last"], "last"], // Test with object, array, string
    ])("should return %s for array %j", (arr, expected) => {
      // Arrange
      const result = last.call(arr);

      // Act & Assert
      expect(result).toBe(expected);
    });
  });
}

module.exports = testLast;
