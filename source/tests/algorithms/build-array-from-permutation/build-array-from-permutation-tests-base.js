function testBuildArray(buildArray) {
  describe("buildArray", () => {
    test.each([
      ["[0,2,1,5,3,4]", "[0,1,2,4,5,3]"],
      ["[5,0,1,2,3,4]", "[4,5,0,1,2,3]"],
    ])(
      "should return $expected for input $nums",
      (numsJson, expectedResultJson) => {
        // Arrange
        const nums = JSON.parse(numsJson);
        const expectedResult = JSON.parse(expectedResultJson);

        // Act
        const actualResult = buildArray(nums);

        // Assert
        expect(actualResult).toEqual(expectedResult);
      }
    );
  });
}

export default testBuildArray;
