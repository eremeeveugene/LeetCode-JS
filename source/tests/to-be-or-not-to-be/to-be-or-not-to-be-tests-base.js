function testExpectFunction(expectFunction) {
  describe("expectFunction", () => {
    // Tests for the 'toBe' method
    test.each([
      [10, 10],
      [5, 5],
      [0, 0],
    ])(
      "should return true when expectedValue is %i and actualValue is %i using toBe",
      (expectedValue, actualValue) => {
        // Arrange
        const expectedResult = true;

        // Act
        const actualResult = expectFunction(expectedValue).toBe(actualValue);

        // Assert
        expect(actualResult).toBe(expectedResult);
      }
    );

    test.each([
      [10, 9],
      [5, 4],
      [0, 1],
    ])(
      "should throw 'Not Equal' error when expectedValue is %i and actualValue is %i using toBe",
      (expectedValue, actualValue) => {
        // Arrange

        // Act
        const actualResult = () =>
          expectFunction(expectedValue).toBe(actualValue);

        // Assert
        expect(actualResult).toThrow("Not Equal");
      }
    );

    // Tests for the 'notToBe' method
    test.each([
      [10, 9],
      [5, 4],
      [0, 1],
    ])(
      "should return true when expectedValue is %i and actualValue is %i using notToBe",
      (expectedValue, actualValue) => {
        // Arrange
        const expectedResult = true;

        // Act
        const actualResult = expectFunction(expectedValue).notToBe(actualValue);

        // Assert
        expect(actualResult).toBe(expectedResult);
      }
    );

    test.each([
      [10, 10],
      [5, 5],
      [0, 0],
    ])(
      "should throw 'Equal' error when expectedValue is %i and actualValue is %i using notToBe",
      (expectedValue, actualValue) => {
        // Arrange

        // Act
        const actualResult = () =>
          expectFunction(expectedValue).notToBe(actualValue);

        // Assert
        expect(actualResult).toThrow("Equal");
      }
    );
  });
}

module.exports = testExpectFunction;
