const memoize = require("../../leetcode/memoize/memoize-map");

describe("memoize", () => {
  test.each([
    [
      [
        [2, 2],
        [2, 2],
        [1, 2],
      ],
      2,
      [4, 4, 3],
    ],
    [
      [
        [3, 3],
        [3, 3],
        [2, 3],
      ],
      2,
      [6, 6, 5],
    ],
  ])(
    "should memoize function and return correct results while limiting function calls",
    (args, expectedCallCount, expectedResult) => {
      // Arrange
      let actualCallCount = 0;

      const sumFunction = (...args) => {
        actualCallCount++;

        return args.reduce((a, b) => a + b, 0);
      };

      const memoizeSum = memoize(sumFunction);

      // Act
      const actualResult = args.map((args) => memoizeSum(...args));

      // Assert
      expect(actualResult).toEqual(expectedResult);
      expect(actualCallCount).toBe(expectedCallCount);
    }
  );
});
