const counterFunction = require("../../leetcode/counter/counter");

describe("counterFunction", () => {
  test.each([
    [10, [10, 11, 12]],
    [5, [5, 6, 7]],
    [0, [0, 1, 2]],
  ])(
    "should return consecutive values starting from n=%i and incrementing with each call",
    (n, expectedValues) => {
      // Arrange
      const counter = counterFunction(n);

      // Act
      const actualValues = [];

      expectedValues.forEach(() => {
        actualValues.push(counter());
      });

      // Assert
      expect(expectedValues).toEqual(actualValues);
    }
  );
});
