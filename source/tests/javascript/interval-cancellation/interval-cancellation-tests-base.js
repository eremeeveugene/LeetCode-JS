function testCancellable(cancellable) {
  jest.useFakeTimers();

  describe("cancellable", () => {
    it("should execute the function immediately and at regular intervals", () => {
      const mockFn = jest.fn();
      const args = [1, 2];
      const t = 1000;

      const cancel = cancellable(mockFn, args, t);

      // Immediately invoked
      expect(mockFn).toHaveBeenCalledWith(1, 2);
      expect(mockFn).toHaveBeenCalledTimes(1);

      // Fast-forward time to allow multiple intervals to pass
      jest.advanceTimersByTime(3000); // 3 intervals

      expect(mockFn).toHaveBeenCalledTimes(4); // 1 initial + 3 repeated

      cancel();
      jest.advanceTimersByTime(3000); // Fast-forward after cancel

      // Should not call the function after cancel
      expect(mockFn).toHaveBeenCalledTimes(4);
    });

    it("should cancel the function execution after calling the returned function", () => {
      const mockFn = jest.fn();
      const args = [3, 4];
      const t = 2000;

      const cancel = cancellable(mockFn, args, t);

      // Immediately invoked
      expect(mockFn).toHaveBeenCalledWith(3, 4);
      expect(mockFn).toHaveBeenCalledTimes(1);

      // Fast-forward time to allow 1 interval
      jest.advanceTimersByTime(2000);

      expect(mockFn).toHaveBeenCalledTimes(2); // 1 initial + 1 repeated

      // Cancel the interval execution
      cancel();

      jest.advanceTimersByTime(2000); // Fast-forward after cancel

      // Should not call the function again after cancel
      expect(mockFn).toHaveBeenCalledTimes(2);
    });
  });
}

module.exports = testCancellable;
