const map = require("../../leetcode/apply-transform-over-each-element-in-array/apply-transform-over-each-element-in-array-iterative");

describe("map function", () => {
  test("should apply the function to all elements of the array", () => {
    const arr = [1, 2, 3, 4];
    const fn = (x) => x * 2;
    const result = map(arr, fn);
    expect(result).toEqual([2, 4, 6, 8]);
  });

  test("should handle an empty array", () => {
    const arr = [];
    const fn = (x) => x * 2;
    const result = map(arr, fn);
    expect(result).toEqual([]);
  });

  test("should apply the function using the index as well", () => {
    const arr = [1, 2, 3];
    const fn = (x, index) => x + index;
    const result = map(arr, fn);
    expect(result).toEqual([1, 3, 5]);
  });

  test("should return the same array if identity function is applied", () => {
    const arr = [10, 20, 30];
    const fn = (x) => x;
    const result = map(arr, fn);
    expect(result).toEqual([10, 20, 30]);
  });

  test("should work with non-numeric arrays", () => {
    const arr = ["a", "b", "c"];
    const fn = (x) => x.toUpperCase();
    const result = map(arr, fn);
    expect(result).toEqual(["A", "B", "C"]);
  });
});
