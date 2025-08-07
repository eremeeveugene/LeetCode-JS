function testTransformArray(transformArray) {
  describe("transformArray", () => {
    test.each([
      ["[4,3,2,1]", "[0,0,1,1]"],
      ["[1,5,1,4,2]", "[0,0,1,1,1]"],
    ])(
      "replaces even with 0, odd with 1, and sorts result",
      (numsJson, expectedResultJson) => {
        // Arrange
        const nums = JSON.parse(numsJson);
        const expectedResult = JSON.parse(expectedResultJson);

        // Act
        const actualResult = transformArray(nums);

        // Assert
        expect(actualResult).toEqual(expectedResult);
      }
    );
  });
}

export default testTransformArray;
