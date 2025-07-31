function testChunk(chunk) {
  describe("chunk function", () => {
    // Arrange
    test.each([
      { arr: [1, 2, 3, 4, 5], size: 1, expected: [[1], [2], [3], [4], [5]] },
      {
        arr: [1, 9, 6, 3, 2],
        size: 3,
        expected: [
          [1, 9, 6],
          [3, 2],
        ],
      },
      { arr: [8, 5, 3, 2, 6], size: 6, expected: [[8, 5, 3, 2, 6]] },
      { arr: [], size: 1, expected: [] },
    ])(
      "should chunk array $arr into chunks of size $size",
      ({ arr, size, expected }) => {
        // Act
        const result = chunk(arr, size);

        // Assert
        expect(result).toEqual(expected);
      }
    );
  });
}

module.exports = testChunk;
