const calculator = require("../lib/calcFunction");

test("add two numbers", ()=>{
  expect(calculator.caseOperator("addition", 2, -3)).toBe(-1);
});

test("subtract two numbers", ()=>{
  expect(calculator.caseOperator("subtraction", 78, 68)).toBe(10);
});

test("multiply two numbers", ()=>{
  expect(calculator.caseOperator("multiplication", 15, 5)).toBe(75);
});

test("divide two numbers", ()=>{
  expect(calculator.caseOperator("division", 900, 100)).toBe(9);
});

test("invalid operator", ()=>{
  expect(calculator.caseOperator("bob", 900, 100)).toBe("Sorry, please enter a valid operator!")
});
