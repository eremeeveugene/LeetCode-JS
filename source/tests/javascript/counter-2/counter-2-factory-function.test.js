const createCounter = require("../../leetcode/counter-2/counter-2-factory-function");

describe("createCounter", () => {
  test("should initialize counter with the provided value and increment correctly", () => {
    const counter = createCounter(5);

    expect(counter.increment()).toBe(6); // Incrementing should return 6
    expect(counter.increment()).toBe(7); // Incrementing should return 7
  });

  test("should decrement correctly", () => {
    const counter = createCounter(5);

    expect(counter.decrement()).toBe(4); // Decrementing should return 4
    expect(counter.decrement()).toBe(3); // Decrementing should return 3
  });

  test("should reset correctly", () => {
    const counter = createCounter(10);

    expect(counter.increment()).toBe(11); // Increment once
    expect(counter.reset()).toBe(10); // Reset back to the initial value
    expect(counter.decrement()).toBe(9); // Decrement after reset
  });
});
