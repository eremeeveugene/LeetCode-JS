const compose = require("../../leetcode/function-composition/function-composition-iterative");

describe("Function Composition", () => {
  test("Example 1: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4", () => {
    const functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
    const composed = compose(functions);
    expect(composed(4)).toBe(65);
  });

  test("Example 2: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1", () => {
    const functions = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x];
    const composed = compose(functions);
    expect(composed(1)).toBe(1000);
  });

  test("Example 3: functions = [], x = 42 (Identity Function)", () => {
    const functions = [];
    const composed = compose(functions);
    expect(composed(42)).toBe(42);
  });

  test("functions = [x => x - 3, x => x * 2], x = 5", () => {
    const functions = [(x) => x - 3, (x) => x * 2];
    const composed = compose(functions);
    expect(composed(5)).toBe(7);
  });

  test("functions = [x => -x], x = -100", () => {
    const functions = [(x) => -x];
    const composed = compose(functions);
    expect(composed(-100)).toBe(100);
  });

  test("functions = [x => x * 2, x => x + 10, x => x - 5], x = 10", () => {
    const functions = [(x) => x * 2, (x) => x + 10, (x) => x - 5];
    const composed = compose(functions);
    expect(composed(10)).toBe(30);
  });

  test("functions = [x => x * 0], x = 100", () => {
    const functions = [(x) => x * 0];
    const composed = compose(functions);
    expect(composed(100)).toBe(0);
  });
});
