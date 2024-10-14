const sleep = require("../../leetcode/sleep/sleep-timeout");

describe("sleep", () => {
  test.each([
    [100, 100, 120],
    [200, 200, 220],
  ])(
    "sleep(%i) should resolve after %i milliseconds",
    async (millis, expectedResult, expectedResultOffset) => {
      // Arrange
      const startTime = Date.now();

      // Act
      await sleep(millis);

      const actualResult = Date.now() - startTime;

      // Assert
      expect(actualResult).toBeGreaterThanOrEqual(expectedResult);
      expect(actualResult).toBeLessThan(expectedResultOffset);
    }
  );
});
