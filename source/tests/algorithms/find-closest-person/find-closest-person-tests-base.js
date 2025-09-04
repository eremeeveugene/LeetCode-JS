function testFindClosest(findClosest) {
  describe("findClosest", () => {
    test.each([
      [2, 7, 4, 1],
      [2, 5, 6, 2],
      [1, 5, 3, 0],
    ])(
      "returns %i as the closest to %i between %i and %i",
      (x, y, z, expectedResult) => {
        // Arrange

        // Act
        const actualResult = findClosest(x, y, z);

        // Assert
        expect(actualResult).toEqual(expectedResult);
      }
    );
  });
}

export default testFindClosest;
