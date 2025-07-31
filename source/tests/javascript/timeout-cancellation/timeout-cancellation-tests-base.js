function testTimeoutCancellation(cancellable) {
  describe("cancellable", () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.clearAllTimers();
    });

    test.each([
      {
        fn: (x) => x * 5,
        args: [2],
        t: 20,
        cancelTimeMs: 50,
      },
      {
        fn: (x1, x2) => x1 * x2,
        args: [2, 4],
        t: 30,
        cancelTimeMs: 100,
      },
    ])(
      "should execute the function if cancelled after the timeout",
      ({ fn, args, t, cancelTimeMs }) => {
        // Arrange
        const mockFn = jest.fn(fn);

        // Act
        const cancelFn = cancellable(mockFn, args, t);

        setTimeout(cancelFn, cancelTimeMs);

        jest.advanceTimersByTime(t);

        // Assert
        expect(mockFn).toHaveBeenCalled();
      }
    );

    test.each([
      {
        fn: (x) => x ** 2,
        args: [2],
        t: 100,
        cancelTimeMs: 50,
      },
    ])(
      "should not execute if cancelled before the timeout",
      ({ fn, args, t, cancelTimeMs }) => {
        // Arrange
        const mockFn = jest.fn(fn);

        // Act
        const cancelFn = cancellable(mockFn, args, t);

        setTimeout(cancelFn, cancelTimeMs);

        jest.advanceTimersByTime(cancelTimeMs);
        jest.advanceTimersByTime(t - cancelTimeMs);

        // Assert
        expect(mockFn).not.toHaveBeenCalled();
      }
    );
  });
}

module.exports = testTimeoutCancellation;
