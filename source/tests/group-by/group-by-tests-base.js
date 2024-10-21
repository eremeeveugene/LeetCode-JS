function testGroupBy(groupBy) {
  describe("groupBy function", () => {
    const testCases = [
      {
        array: [{ id: "1" }, { id: "1" }, { id: "2" }],
        fn: (item) => item.id,
        expected: {
          1: [{ id: "1" }, { id: "1" }],
          2: [{ id: "2" }],
        },
      },
      {
        array: [
          [1, 2, 3],
          [1, 3, 5],
          [1, 5, 9],
        ],
        fn: (list) => String(list[0]),
        expected: {
          1: [
            [1, 2, 3],
            [1, 3, 5],
            [1, 5, 9],
          ],
        },
      },
      {
        array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        fn: (n) => String(n > 5),
        expected: {
          true: [6, 7, 8, 9, 10],
          false: [1, 2, 3, 4, 5],
        },
      },
    ];

    test.each(testCases)(
      "should group the array correctly",
      ({ array, fn, expected }) => {
        // Act
        const result = groupBy.call(array, fn);

        // Assert
        expect(result).toEqual(expected);
      }
    );
  });
}

module.exports = testGroupBy;
