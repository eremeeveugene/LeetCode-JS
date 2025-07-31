import createHelloWorldFunction from "@javascript/create-hello-world-function/create-hello-world-function-higher-order-function.js";

describe("createHelloWorldFunction", () => {
  test('should return "Hello World" when invoked', () => {
    // Arrange
    var expectedResult = "Hello World";

    const createHelloWorld = createHelloWorldFunction();

    // Act
    const actualResult = createHelloWorld();

    // Assert
    expect(actualResult).toBe(expectedResult);
  });
});
