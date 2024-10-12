const once = require("../../leetcode/allow-one-function-call/allow-one-function-call-once-pattern");

describe("once", () => {
  test("should call the function only once", () => {
    const mockFn = jest.fn((x) => x + 1);
    const wrappedFn = once(mockFn);

    expect(wrappedFn(1)).toBe(2); // First call should execute the function
    expect(mockFn).toHaveBeenCalledTimes(1);

    expect(wrappedFn(2)).toBeUndefined(); // Subsequent call should return undefined
    expect(mockFn).toHaveBeenCalledTimes(1); // Function should not be called again
  });

  test("should return undefined after first call", () => {
    const mockFn = jest.fn(() => "called");
    const wrappedFn = once(mockFn);

    wrappedFn();
    expect(wrappedFn()).toBeUndefined(); // Further calls return undefined
  });

  test("should pass arguments correctly on the first call", () => {
    const mockFn = jest.fn((a, b) => a + b);
    const wrappedFn = once(mockFn);

    expect(wrappedFn(2, 3)).toBe(5);
    expect(wrappedFn(4, 5)).toBeUndefined(); // Subsequent call should return undefined
    expect(mockFn).toHaveBeenCalledWith(2, 3); // Ensure the original function received the correct arguments
  });
});
