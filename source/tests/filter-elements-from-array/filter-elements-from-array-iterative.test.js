const filter = require("../../leetcode/filter-elements-from-array/filter-elements-from-array-iterative");

describe("filter", () => {
  test("should return an array with elements that match the condition (simple numbers)", () => {
    const arr = [1, 2, 3, 4, 5];
    const fn = (n) => n % 2 === 0; // Filter even numbers
    const result = filter(arr, fn);
    expect(result).toEqual([2, 4]);
  });

  test("should return an empty array if no elements match the condition", () => {
    const arr = [1, 3, 5];
    const fn = (n) => n % 2 === 0; // Filter even numbers
    const result = filter(arr, fn);
    expect(result).toEqual([]);
  });

  test("should return the entire array if all elements match the condition", () => {
    const arr = [2, 4, 6];
    const fn = (n) => n % 2 === 0; // Filter even numbers
    const result = filter(arr, fn);
    expect(result).toEqual([2, 4, 6]);
  });

  test("should pass the index as the second argument to the filter function", () => {
    const arr = [10, 20, 30, 40];
    const fn = (n, i) => i % 2 === 0; // Filter based on index (keep elements at even index positions)
    const result = filter(arr, fn);
    expect(result).toEqual([10, 30]);
  });

  test("should handle an empty array correctly", () => {
    const arr = [];
    const fn = (n) => n > 0;
    const result = filter(arr, fn);
    expect(result).toEqual([]);
  });

  test("should handle complex condition function", () => {
    const arr = ["apple", "banana", "cherry"];
    const fn = (item) => item.includes("a"); // Filter strings that contain 'a'
    const result = filter(arr, fn);
    expect(result).toEqual(["apple", "banana"]);
  });
});
