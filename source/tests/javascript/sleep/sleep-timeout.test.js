import sleep from "@javascript/sleep/sleep-timeout.js";

describe("sleep", () => {
  test.each([
    [100, 100, 150],
    [200, 200, 250],
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
