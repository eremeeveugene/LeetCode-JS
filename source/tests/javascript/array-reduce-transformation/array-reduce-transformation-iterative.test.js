import reduce from "@javascript/array-reduce-transformation/array-reduce-transformation-iterative.js";

describe("reduce function", () => {
  test("sums all numbers in the array", () => {
    // Arrange
    const nums = [1, 2, 3, 4];
    const sumFn = (a, b) => a + b;

    // Act
    const result = reduce(nums, sumFn, 0);

    // Assert
    expect(result).toBe(10);
  });

  test("multiplies all numbers in the array", () => {
    // Arrange
    const nums = [1, 2, 3, 4];
    const multiplyFn = (a, b) => a * b;

    // Act
    const result = reduce(nums, multiplyFn, 1);

    // Assert
    expect(result).toBe(24);
  });

  test("joins all strings in the array", () => {
    // Arrange
    const strs = ["Hello", " ", "World"];
    const concatFn = (a, b) => a + b;

    // Act
    const result = reduce(strs, concatFn, "");

    // Assert
    expect(result).toBe("Hello World");
  });

  test("returns initial value for an empty array", () => {
    // Arrange
    const nums = [];
    const sumFn = (a, b) => a + b;

    // Act
    const result = reduce(nums, sumFn, 100);

    // Assert
    expect(result).toBe(100);
  });

  test("applies subtraction step by step", () => {
    // Arrange
    const nums = [10, 2, 1];
    const subtractFn = (a, b) => a - b;

    // Act
    const result = reduce(nums, subtractFn, 20);

    // Assert
    expect(result).toBe(7);
  });
});
