function testMaxFreqSum(maxFreqSum) {
  describe("maxFreqSum", () => {
    test.each([
      { s: "successes", expectedResult: 6 },
      { s: "aeiaeia", expectedResult: 3 },
    ])(
      "returns the sum of the maximum vowel and consonant frequencies for '%s'",
      ({ s, expectedResult }) => {
        // Arrange

        // Act
        const actualResult = maxFreqSum(s);

        // Assert
        expect(actualResult).toBe(expectedResult);
      }
    );
  });
}

export default testMaxFreqSum;
