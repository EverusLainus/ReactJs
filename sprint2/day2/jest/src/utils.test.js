// utils.test.js

import { add, fetchData } from "./utils";

// Test for the `add` function
describe("add", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("adds -1 + -1 to equal -2", () => {
    expect(add(-1, -1)).toBe(-2);
  });
});

// Test for the `fetchData` function
describe("fetchData", () => {
  // Mock the fetch function
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: "some data" }),
      })
    );
  });

  afterEach(() => {
    global.fetch.mockClear();
    delete global.fetch;
  });

  test("fetches data successfully", async () => {
    const data = await fetchData();
    expect(data).toEqual({ data: "some data" });
  });

  test("handles fetch error", async () => {
    global.fetch.mockImplementationOnce(() => Promise.reject("API failure"));

    try {
      await fetchData();
    } catch (error) {
      expect(error).toBe("API failure");
    }
  });
});
