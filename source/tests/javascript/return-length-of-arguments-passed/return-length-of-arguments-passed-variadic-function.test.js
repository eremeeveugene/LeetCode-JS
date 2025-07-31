const argumentsLength = require("../../leetcode/return-length-of-arguments-passed/return-length-of-arguments-passed-variadic-function");

describe("argumentsLength", () => {
  test("should return 0 when no arguments are passed", () => {
    expect(argumentsLength()).toBe(0);
  });

  test("should return 1 when one argument is passed", () => {
    expect(argumentsLength(1)).toBe(1);
  });

  test("should return 3 when three arguments are passed", () => {
    expect(argumentsLength(1, 2, 3)).toBe(3);
  });

  test("should return the correct length with mixed types of arguments", () => {
    expect(
      argumentsLength(null, false, 42, "string", [1, 2, 3], { key: "value" })
    ).toBe(6);
  });

  test("should return 2 when two arguments are passed", () => {
    expect(argumentsLength("hello", "world")).toBe(2);
  });
});
