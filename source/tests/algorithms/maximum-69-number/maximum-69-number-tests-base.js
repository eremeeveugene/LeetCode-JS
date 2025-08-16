function testMaximum69Number(maximum69Number) {
  describe("maximum69Number", () => {
    test.each([
      [9669, 9969],
      [9996, 9999],
      [9999, 9999],
    ])("returns %i for input %i", (num, expectedResult) => {
      // Arrange

      // Act
      const actualResult = maximum69Number(num);

      // Assert
      expect(actualResult).toEqual(expectedResult);
    });
  });
}

export default testMaximum69Number;
