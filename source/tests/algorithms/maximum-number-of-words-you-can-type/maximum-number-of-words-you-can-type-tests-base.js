function testCanBeTypedWords(canBeTypedWords) {
  describe("canBeTypedWords", () => {
    test.each([
      ["hello world", "ad", 1],
      ["leet code", "lt", 1],
      ["leet code", "e", 0],
    ])(
      "should return %i typable words for text '%s' with broken letters '%s'",
      (text, brokenLetters, expectedResult) => {
        // Arrange

        // Act
        const actualResult = canBeTypedWords(text, brokenLetters);

        // Assert
        expect(actualResult).toBe(expectedResult);
      }
    );
  });
}

export default testCanBeTypedWords;
