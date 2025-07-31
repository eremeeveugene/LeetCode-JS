function testAddTwoPromises(addTwoPromises) {
  describe("addTwoPromises", () => {
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
      "returns $expectedResult when inputs are $value1 and $value2 with delays $promise1TimeOut/$promise2TimeOut",
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
        const result = await addTwoPromises(promise1, promise2);

        // Assert
        expect(result).toBe(expectedResult);
      }
    );
  });
}

export default testAddTwoPromises;
