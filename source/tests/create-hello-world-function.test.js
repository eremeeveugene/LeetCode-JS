const createHelloWorldFunction = require("../leetcode/create-hello-world-function");

describe("createHelloWorldFunction", () => {
  test('should return "Hello World" when invoked', () => {
    // Arrange
    var expectedResult = "Hello World";

    const createHelloWorld = createHelloWorldFunction();

    // Act
    const actualResult = createHelloWorld();

    // Assert
    expect(expectedResult).toBe(actualResult);
  });
});
