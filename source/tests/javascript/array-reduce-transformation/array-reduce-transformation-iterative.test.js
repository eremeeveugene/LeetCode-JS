const reduce = require("../../leetcode/array-reduce-transformation/array-reduce-transformation-iterative");

describe("reduce function", () => {
  test("should sum all numbers in the array", () => {
    const nums = [1, 2, 3, 4];
    const sumFn = (a, b) => a + b;
    expect(reduce(nums, sumFn, 0)).toBe(10);
  });

  test("should multiply all numbers in the array", () => {
    const nums = [1, 2, 3, 4];
    const multiplyFn = (a, b) => a * b;
    expect(reduce(nums, multiplyFn, 1)).toBe(24);
  });

  test("should concatenate strings in an array", () => {
    const strs = ["Hello", " ", "World"];
    const concatFn = (a, b) => a + b;
    expect(reduce(strs, concatFn, "")).toBe("Hello World");
  });

  test("should return the initial value if the array is empty", () => {
    const nums = [];
    const sumFn = (a, b) => a + b;
    expect(reduce(nums, sumFn, 100)).toBe(100);
  });

  test("should handle subtraction correctly", () => {
    const nums = [10, 2, 1];
    const subtractFn = (a, b) => a - b;
    expect(reduce(nums, subtractFn, 20)).toBe(7); // 20 - 10 - 2 - 1 = 7
  });
});
