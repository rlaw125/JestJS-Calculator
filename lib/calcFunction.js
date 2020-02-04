function caseOperator(operator, num1, num2){
  switch(operator){
    case "addition":
    result = add(num1, num2);
    break;

    case "subtraction":
    result = subtract(num1, num2);
    break;

    case "multiplication":
    result = multiply(num1, num2);
    break;

    case "division":
    result = divide(num1, num2);
    break;

    default:
    result = "Sorry, please enter a valid operator!"
  }
  return result;
}

function add(a, b){
  return a + b
}

function subtract(a, b){
  return a - b
}

function multiply(a, b){
  return a * b
}

function divide(a, b){
  return a / b
}

module.exports = {
caseOperator
}
