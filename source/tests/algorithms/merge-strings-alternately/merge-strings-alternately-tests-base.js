function testMergeAlternately(mergeAlternately) {
  describe("mergeAlternately", () => {
    test.each([
      ["abc", "pqr", "apbqcr"],
      ["ab", "pqrs", "apbqrs"],
      ["abcd", "pq", "apbqcd"],
      ["a", "xyz", "axyz"],
      ["hello", "world", "hweolrllod"],
      ["short", "longertext", "slhoonrgtertext"],
      ["a", "b", "ab"],
    ])(
      "should merge '%s' and '%s' to get '%s'",
      (word1, word2, expectedResult) => {
        // Arrange

        // Act
        const actualResult = mergeAlternately(word1, word2);

        // Assert
        expect(actualResult).toBe(expectedResult);
      }
    );
  });
}

export default testMergeAlternately;
