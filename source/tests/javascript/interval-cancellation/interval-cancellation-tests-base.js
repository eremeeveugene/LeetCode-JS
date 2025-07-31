import { jest } from "@jest/globals";

function testCancellable(cancellable) {
  describe("cancellable", () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it("executes the function immediately and at set intervals", () => {
      // Arrange
      const mockFn = jest.fn();
      const args = [1, 2];
      const t = 1000;

      // Act
      const cancel = cancellable(mockFn, args, t);

      // Assert
      expect(mockFn).toHaveBeenCalledWith(1, 2);
      expect(mockFn).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(3000);
      expect(mockFn).toHaveBeenCalledTimes(4);

      cancel();
      jest.advanceTimersByTime(3000);
      expect(mockFn).toHaveBeenCalledTimes(4);
    });

    it("stops executing after cancel is called", () => {
      // Arrange
      const mockFn = jest.fn();
      const args = [3, 4];
      const t = 2000;

      // Act
      const cancel = cancellable(mockFn, args, t);

      // Assert
      expect(mockFn).toHaveBeenCalledWith(3, 4);
      expect(mockFn).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(2000);
      expect(mockFn).toHaveBeenCalledTimes(2);

      cancel();
      jest.advanceTimersByTime(2000);
      expect(mockFn).toHaveBeenCalledTimes(2);
    });
  });
}

export default testCancellable;
