function testIsPowerOfFour(isPowerOfFour) {
  describe("isPowerOfFour", () => {
    test.each([
      [-4, false],
      [-1, false],
      [0, false],
      [1, true],
      [2, false],
      [3, false],
      [4, true],
      [5, false],
      [16, true],
      [64, true],
    ])("returns %s for %d", (n, expectedResult) => {
      // Arrange

      // Act
      const actualResult = isPowerOfFour(n);

      // Assert
      expect(actualResult).toEqual(expectedResult);
    });
  });
}

export default testIsPowerOfFour;
