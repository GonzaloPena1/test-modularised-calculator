const calculator = require("../calculator");

describe("Calculator", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should add two numbers correctly", () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(-1, 1)).toBe(0);
  });

  test("should subtract two numbers correctly", () => {
    expect(calculator.subtract(10, 5)).toBe(5);
    expect(calculator.subtract(5, 10)).toBe(-5);
  });

  test("should multiply two numbers correctly", () => {
    expect(calculator.multiply(4, 6)).toBe(24);
    expect(calculator.multiply(-2, 3)).toBe(-6);
  });

  test("should divide two numbers correctly", () => {
    expect(calculator.divide(20, 4)).toBe(5);
    expect(calculator.divide(9, 3)).toBe(3);
  });

  test("should throw an error when dividing by zero", () => {
    expect(() => calculator.divide(10, 0)).toThrow("Cannot divide by zero.");
  });
});
