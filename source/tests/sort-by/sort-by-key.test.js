const sortBy = require("../../leetcode/sort-by/sort-by-key");

describe("sortBy function", () => {
  test.each([
    {
      arr: [5, 4, 1, 2, 3],
      fn: (x) => x,
      expected: [1, 2, 3, 4, 5],
      description: "should sort array of numbers in ascending order",
    },
    {
      arr: [{ x: 1 }, { x: 0 }, { x: -1 }],
      fn: (d) => d.x,
      expected: [{ x: -1 }, { x: 0 }, { x: 1 }],
      description: 'should sort array of objects by their "x" property',
    },
    {
      arr: [
        [3, 4],
        [5, 2],
        [10, 1],
      ],
      fn: (x) => x[1],
      expected: [
        [10, 1],
        [5, 2],
        [3, 4],
      ],
      description: "should sort array of arrays by the second element",
    },
  ])("$description", ({ arr, fn, expected }) => {
    // Arrange: Set up the input and expected result
    // Act: Call the function with the input
    const result = sortBy(arr, fn);

    // Assert: Verify the result matches the expected output
    expect(result).toEqual(expected);
  });
});
