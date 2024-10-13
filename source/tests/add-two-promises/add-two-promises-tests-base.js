function testAddTwoPromises(addTwoPromises) {
  describe("addTwoPromises", () => {
    // Successful test cases using test.each
    test.each([
      {
        value1: 2,
        promise1TimeOut: 20,
        value2: 5,
        promise2TimeOut: 60,
        expectedResult: 7,
      },
      {
        value1: 10,
        promise1TimeOut: 50,
        value2: -12,
        promise2TimeOut: 30,
        expectedResult: -2,
      },
    ])(
      "should resolve with the correct sum for value1=$value1 and value2=$value2",
      async ({
        value1,
        promise1TimeOut,
        value2,
        promise2TimeOut,
        expectedResult,
      }) => {
        // Arrange
        const promise1 = new Promise((resolve) =>
          setTimeout(() => resolve(value1), promise1TimeOut)
        );
        const promise2 = new Promise((resolve) =>
          setTimeout(() => resolve(value2), promise2TimeOut)
        );

        // Act
        const actualResult = await addTwoPromises(promise1, promise2);

        // Assert
        expect(actualResult).toBe(expectedResult);
      }
    );
  });
}

module.exports = testAddTwoPromises;
