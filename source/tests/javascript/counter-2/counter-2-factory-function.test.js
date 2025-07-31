import createCounter from "@javascript/counter-2/counter-2-factory-function.js";

describe("createCounter", () => {
  test("increments the counter starting from the given value", () => {
    // Arrange
    const counter = createCounter(5);

    // Act
    const first = counter.increment();
    const second = counter.increment();

    // Assert
    expect(first).toBe(6);
    expect(second).toBe(7);
  });

  test("decrements the counter value", () => {
    // Arrange
    const counter = createCounter(5);

    // Act
    const first = counter.decrement();
    const second = counter.decrement();

    // Assert
    expect(first).toBe(4);
    expect(second).toBe(3);
  });

  test("resets the counter to the initial value", () => {
    // Arrange
    const counter = createCounter(10);

    // Act
    const incremented = counter.increment();
    const reset = counter.reset();
    const decremented = counter.decrement();

    // Assert
    expect(incremented).toBe(11);
    expect(reset).toBe(10);
    expect(decremented).toBe(9);
  });
});
