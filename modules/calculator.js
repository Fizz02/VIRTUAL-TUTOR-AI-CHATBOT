class Calculator {
  constructor() {
    this.displayValue = "";
  }

  addToDisplay(value) {
    this.displayValue += value;
    this.updateDisplay();
  }

  clearDisplay() {
    this.displayValue = "";
    this.updateDisplay();
  }

  deleteChar() {
    this.displayValue = this.displayValue.slice(0, -1);
    this.updateDisplay();
  }

  handleError(message) {
    this.displayValue = message;
    this.updateDisplay();
  }

  handleCalculationResult(result) {
    const displayElement = document.getElementById("display");
    if (
      !isNaN(result) &&
      result >= 0 &&
      result <= 100 &&
      /^[0-9+\-*/. ]+$/.test(this.displayValue)
    ) {
      this.displayValue = result;
      displayElement.value = this.displayValue;
    } else {
      this.handleError("Result beyond limit.");
    }
  }

  calculate1() {
    try {
      const result = eval(this.displayValue);
      this.handleCalculationResult(result);
    } catch (error) {
      this.handleError("Error in calculation: " + error.message);
    }
  }

  calculate2() {
    try {
      const sanitizedValue = this.displayValue.replace(/[^0-9+\-*/(). ]/g, "");
      if (sanitizedValue === "") {
        throw new Error("Expression invalid or incomplete.");
      }

      const result = this.evaluateExpression(sanitizedValue);

      this.handleCalculationResult(result);
    } catch (error) {
      this.handleError("Error in calculation: " + error.message);
    }
  }

  calculate3() {
    try {
      const sanitizedValue = this.displayValue.replace(/[^0-9+\-*/(). ]/g, "");
      const result = this.evaluateExpression(sanitizedValue);

      this.handleCalculationResult(result);
    } catch (error) {
      this.handleError("Error in calculation: " + error.message);
    }
  }

  evaluateExpression(expression) {
    if (!operators.has(token)) {
      stack.push(parseFloat(token));
    } else {
      const operand2 = stack.pop();
      const operand1 = stack.pop();

      switch (token) {
        case "+":
          stack.push(operand1 + operand2);
          break;
        case "-":
          stack.push(operand1 - operand2);
          break;
        case "*":
          stack.push(operand1 * operand2);
          break;
        case "/":
          const quotient = Math.floor(operand1 / operand2);
          const remainder = operand1 % operand2;
          stack.push({ quotient, remainder });
          break;
        case "%":
          stack.push(operand1 % operand2);
          break;
      }
    }
  }

  infixToPostfix(infix) {
    const output = [];
    const stack = [];
    const operators = {
      "+": 1,
      "-": 1,
      "*": 2,
      "/": 2,
    };

    const isOperator = (token) => operators.hasOwnProperty(token);

    for (const token of infix.match(/\d+|[+\-*/()]/g)) {
      if (!isNaN(token)) {
        output.push(token);
      } else if (token === "(") {
        stack.push(token);
      } else if (token === ")") {
        while (stack.length > 0 && stack[stack.length - 1] !== "(") {
          output.push(stack.pop());
        }
        stack.pop(); // Discard the '('
      } else if (isOperator(token)) {
        while (
          stack.length > 0 &&
          isOperator(stack[stack.length - 1]) &&
          operators[stack[stack.length - 1]] >= operators[token]
        ) {
          output.push(stack.pop());
        }
        stack.push(token);
      }
    }

    while (stack.length > 0) {
      output.push(stack.pop());
    }

    return output;
  }

  updateDisplay() {
    const displayElement = document.getElementById("display");
    displayElement.value = this.displayValue;
  }
}

const calculator = new Calculator();