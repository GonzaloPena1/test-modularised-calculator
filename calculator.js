const fs = require("fs");
const path = require("path");

// Define the log file path
const logFile = path.join(__dirname, "calculations.txt");

// Function to log calculations to a file
const logCalculation = (operation, a, b, result) => {
  const logEntry = `${a} ${operation} ${b} = ${result}\n`;

  fs.appendFile(logFile, logEntry, (err) => {
    if (err) {
      console.error("Error logging calculation:", err);
    }
  });
};

// Calculator functions
const add = (a, b) => {
  const result = a + b;
  logCalculation("+", a, b, result);
  return result;
};

const subtract = (a, b) => {
  const result = a - b;
  logCalculation("-", a, b, result);
  return result;
};

const multiply = (a, b) => {
  const result = a * b;
  logCalculation("*", a, b, result);
  return result;
};

const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }
  const result = a / b;
  logCalculation("/", a, b, result);
  return result;
};

// Export the functions for reuse
module.exports = { add, subtract, multiply, divide };
