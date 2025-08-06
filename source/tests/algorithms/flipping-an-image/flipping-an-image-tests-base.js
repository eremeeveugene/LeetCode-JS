function testFlipAndInvertImage(flipAndInvertImage) {
  describe("flipAndInvertImage", () => {
    test.each([
      ["[[1,1,0],[1,0,1],[0,0,0]]", "[[1,0,0],[0,1,0],[1,1,1]]"],
      [
        "[[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]",
        "[[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]",
      ],
    ])("flips and inverts %s to get %s", (imageJson, expectedResultJson) => {
      // Arrange
      const image = JSON.parse(imageJson);
      const expectedResult = JSON.parse(expectedResultJson);

      // Act
      const actualResult = flipAndInvertImage(image);

      // Assert
      expect(actualResult).toEqual(expectedResult);
    });
  });
}

export default testFlipAndInvertImage;
