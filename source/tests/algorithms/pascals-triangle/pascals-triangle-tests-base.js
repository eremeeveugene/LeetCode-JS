function testGenerate(generate) {
  describe("generate - Pascal's Triangle", () => {
    test.each([
      [1, "[[1]]"],
      [5, "[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]"],
    ])(
      "should return Pascal's Triangle with %i rows",
      (numRows, expectedResultJson) => {
        // Arrange
        const expectedResult = JSON.parse(expectedResultJson);

        // Act
        const actualResult = generate(numRows);

        // Assert
        expect(actualResult).toEqual(expectedResult);
      }
    );
  });
}

export default testGenerate;
