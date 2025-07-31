function testFindTheDifference(findTheDifference) {
  describe("findTheDifference", () => {
    test.each([
      { s: "abcd", t: "abcde", expectedResult: "e" },
      { s: "", t: "y", expectedResult: "y" },
      { s: "a", t: "aa", expectedResult: "a" },
    ])(
      "should return the added letter for s: '$s' and t: '$t'",
      ({ s, t, expectedResult }) => {
        // Arrange

        // Act
        const actualResult = findTheDifference(s, t);

        console.log(
          `For s: ${s}, t: ${t}, got: ${actualResult}, expected: ${expectedResult}`
        );

        // Assert
        expect(actualResult).toBe(expectedResult);
      }
    );
  });
}

export default testFindTheDifference;
