function testCalculatorWithMethodChaining(Calculator) {
  describe("Calculator with method chaining", () => {
    test.each([
      {
        initial: 10,
        actions: ["add", "subtract", "getResult"],
        values: [5, 7],
        expected: 8,
      },
      {
        initial: 2,
        actions: ["multiply", "power", "getResult"],
        values: [5, 2],
        expected: 100,
      },
      {
        initial: 42,
        actions: ["getResult"],
        values: [],
        expected: 42,
      },
    ])(
      "starting with $initial, performing $actions with $values returns $expected",
      ({ initial, actions, values, expected }) => {
        // Arrange
        let calculator = new Calculator(initial);

        // Act
        actions.forEach((action, i) => {
          if (action !== "getResult") {
            calculator = calculator[action](values[i]);
          }
        });

        const result = calculator.getResult();

        // Assert
        expect(result).toBe(expected);
      }
    );

    test("should throw on division by zero", () => {
      // Arrange
      const calculator = new Calculator(20);

      // Act & Assert
      expect(() => calculator.divide(0)).toThrow(
        "Division by zero is not allowed"
      );
    });
  });
}

export default testCalculatorWithMethodChaining;
