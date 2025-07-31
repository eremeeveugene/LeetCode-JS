function testLast(last) {
  describe("last", () => {
    test.each([
      [[null, {}, 3], 3],
      [[], -1],
      [[1], 1],
      [[false, true, false], false],
      [["a", "b", "c"], "c"],
      [[null], null],
      [[{}, [], "last"], "last"],
    ])("returns %s for array %j", (input, expected) => {
      // Arrange
      const array = input;

      // Act
      const result = last.call(array);

      // Assert
      expect(result).toBe(expected);
    });
  });
}

export default testLast;
