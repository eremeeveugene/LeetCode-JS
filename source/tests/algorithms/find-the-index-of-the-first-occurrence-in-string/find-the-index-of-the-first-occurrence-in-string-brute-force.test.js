import strStr from "@algorithms/find-the-index-of-the-first-occurrence-in-string/find-the-index-of-the-first-occurrence-in-string-brute-force.js";

describe("strStr", () => {
  test.each([
    ["sadbutsad", "sad", 0],
    ["leetcode", "leeto", -1],
    ["hello", "ll", 2],
    ["aaaaa", "bba", -1],
    ["abc", "", 0],
    ["a", "a", 0],
    ["a", "aa", -1],
    ["mississippi", "issi", 1],
    ["ababab", "bab", 1],
    ["abcd", "d", 3],
  ])(
    'returns %i for haystack="%s" and needle="%s"',
    (haystack, needle, expected) => {
      // Arrange

      // Act
      const result = strStr(haystack, needle);

      // Assert
      expect(result).toBe(expected);
    }
  );
});
