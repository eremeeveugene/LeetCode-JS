function testIsEmpty(isEmpty) {
  describe("isEmpty function tests", () => {
    test.each([
      [{ x: 5, y: 42 }, false],
      [{}, true],
      [[null, false, 0], false],
    ])("returns %s for input %j", (obj, expected) => {
      // Act
      const result = isEmpty(obj);

      // Assert
      expect(result).toBe(expected);
    });
  });
}

module.exports = testIsEmpty;
