function testIsPowerOfTwo(isPowerOfTwo) {
  describe("isPowerOfTwo", () => {
    test.each([
      [1, true],
      [3, false],
      [16, true],
    ])("should return %s when input is %s", (n, expectedResult) => {
      // Arrange

      // Act
      const actualResult = isPowerOfTwo(n);

      // Assert
      expect(actualResult).toEqual(expectedResult);
    });
  });
}

export default testIsPowerOfTwo;
