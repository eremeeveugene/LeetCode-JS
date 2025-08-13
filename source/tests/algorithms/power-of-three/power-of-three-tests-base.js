function testIsPowerOfThree(isPowerOfThree) {
  describe("isPowerOfThree", () => {
    test.each([
      [27, true],
      [0, false],
      [-1, false],
    ])("returns %s for n=%s", (n, expectedResult) => {
      // Arrange

      // Act
      const actualResult = isPowerOfThree(n);

      // Assert
      expect(actualResult).toEqual(expectedResult);
    });
  });
}

export default testIsPowerOfThree;
