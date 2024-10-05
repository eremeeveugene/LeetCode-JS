function testCounterFunction(counterFunction) {
  describe("counterFunction", () => {
    test.each([
      [10, [10, 11, 12]],
      [5, [5, 6, 7]],
      [0, [0, 1, 2]],
    ])(
      "should return consecutive values starting from n=%i and incrementing with each call",
      (n, expectedResult) => {
        // Arrange
        const counter = counterFunction(n);

        // Act
        const actualResult = expectedResult.map(() => counter());

        // Assert
        expect(actualResult).toEqual(expectedResult);
      }
    );
  });
}

module.exports = testCounterFunction;
