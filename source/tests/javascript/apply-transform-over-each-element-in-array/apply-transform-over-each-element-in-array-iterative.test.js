import map from "@javascript/apply-transform-over-each-element-in-array/apply-transform-over-each-element-in-array-iterative.js";

describe("map function", () => {
  test("applies the transformation to each number in the array", () => {
    // Arrange
    const arr = [1, 2, 3, 4];
    const fn = (x) => x * 2;

    // Act
    const result = map(arr, fn);

    // Assert
    expect(result).toEqual([2, 4, 6, 8]);
  });

  test("returns an empty array when input is empty", () => {
    // Arrange
    const arr = [];
    const fn = (x) => x * 2;

    // Act
    const result = map(arr, fn);

    // Assert
    expect(result).toEqual([]);
  });

  test("uses the index in the transformation", () => {
    // Arrange
    const arr = [1, 2, 3];
    const fn = (x, index) => x + index;

    // Act
    const result = map(arr, fn);

    // Assert
    expect(result).toEqual([1, 3, 5]);
  });

  test("returns the original array when using the identity function", () => {
    // Arrange
    const arr = [10, 20, 30];
    const fn = (x) => x;

    // Act
    const result = map(arr, fn);

    // Assert
    expect(result).toEqual([10, 20, 30]);
  });

  test("transforms each string to uppercase", () => {
    // Arrange
    const arr = ["a", "b", "c"];
    const fn = (x) => x.toUpperCase();

    // Act
    const result = map(arr, fn);

    // Assert
    expect(result).toEqual(["A", "B", "C"]);
  });
});
