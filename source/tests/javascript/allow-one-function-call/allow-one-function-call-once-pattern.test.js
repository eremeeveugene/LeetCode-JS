import { jest } from "@jest/globals";
import once from "@javascript/allow-one-function-call/allow-one-function-call-once-pattern.js";

describe("once", () => {
  test("calls the original function only once", () => {
    // Arrange
    const mockFn = jest.fn((x) => x + 1);
    const wrappedFn = once(mockFn);

    // Act
    const firstCall = wrappedFn(1);
    const secondCall = wrappedFn(2);

    // Assert
    expect(firstCall).toBe(2);
    expect(secondCall).toBeUndefined();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("returns undefined for calls after the first one", () => {
    // Arrange
    const mockFn = jest.fn(() => "called");
    const wrappedFn = once(mockFn);

    // Act
    wrappedFn();
    const result = wrappedFn();

    // Assert
    expect(result).toBeUndefined();
  });

  test("passes all arguments to the original function on the first call", () => {
    // Arrange
    const mockFn = jest.fn((a, b) => a + b);
    const wrappedFn = once(mockFn);

    // Act
    const firstCall = wrappedFn(2, 3);
    const secondCall = wrappedFn(4, 5);

    // Assert
    expect(firstCall).toBe(5);
    expect(secondCall).toBeUndefined();
    expect(mockFn).toHaveBeenCalledWith(2, 3);
  });
});
