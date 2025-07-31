const timeLimit = require("../../leetcode/promise-time-limit/promise-time-limit-try-catch-finally");

describe("timeLimit", () => {
  jest.useFakeTimers();

  test("should return result if function resolves within the time limit", async () => {
    const mockFn = jest.fn().mockResolvedValue("Success");
    const limitedFn = timeLimit(mockFn, 1000);

    const resultPromise = limitedFn();

    jest.advanceTimersByTime(500); // Simulate 500ms passing

    await expect(resultPromise).resolves.toBe("Success");
    expect(mockFn).toHaveBeenCalled();
  });

  test('should reject with "Time Limit Exceeded" if function takes too long', async () => {
    const mockFn = jest
      .fn()
      .mockImplementation(
        () => new Promise((resolve) => setTimeout(resolve, 2000))
      );
    const limitedFn = timeLimit(mockFn, 1000);

    const resultPromise = limitedFn();

    jest.advanceTimersByTime(1000); // Simulate 1000ms passing

    await expect(resultPromise).rejects.toBe("Time Limit Exceeded");
  });

  test("should not reject if the function resolves right before the time limit", async () => {
    const mockFn = jest
      .fn()
      .mockImplementation(
        () => new Promise((resolve) => setTimeout(resolve, 900))
      );
    const limitedFn = timeLimit(mockFn, 1000);

    const resultPromise = limitedFn();

    jest.advanceTimersByTime(900); // Simulate 900ms passing

    await expect(resultPromise).resolves.toBeUndefined();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });
});
