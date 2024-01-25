class Calculator {
  constructor() {
    this.displayValue = "";
  }

  addToDisplay(value) {
    this.displayValue += value;
    document.getElementById("display").value = this.displayValue;
  }

  clearDisplay() {
    this.displayValue = "";
    document.getElementById("display").value = this.displayValue;
  }

  deleteChar() {
    this.displayValue = this.displayValue.slice(0, -1);
    document.getElementById("display").value = this.displayValue;
  }
  calculate1() {
    try {
      const result = eval(this.displayValue);
      if (
        !isNaN(result) &&
        result >= 0 &&
        result <= 100 &&
        /^[0-9+\-*/. ]+$/.test(this.displayValue)
      ) {
        this.displayValue = result;
        document.getElementById("display").value = this.displayValue;
      } else {
        throw new Error("Result beyond limit.");
      }
    } catch (error) {
      document.getElementById("display").value = "Result beyond 0-100";
    }
  }
  calculate2() {
    try {
      const sanitizedValue = this.displayValue.replace(/[^0-9+\-*/(). ]/g, "");
      if (sanitizedValue === "") {
        throw new Error("Expression invalid or incomplete.");
      }

      const result = this.evaluateExpression(sanitizedValue);

      if (
        typeof result === "object" &&
        "quotient" in result &&
        "remainder" in result
      ) {
        const { quotient, remainder } = result;
        if (
          !isNaN(quotient) &&
          quotient >= 0 &&
          quotient <= 1000 &&
          !isNaN(remainder) &&
          remainder >= 0 &&
          remainder <= 1000
        ) {
          this.displayValue = `${quotient} remainder ${remainder}`;
          document.getElementById("display").value = this.displayValue;
        } else {
          throw new Error("Result beyond 0-1000");
        }
      } else if (!isNaN(result) && result >= 0 && result <= 1000) {
        this.displayValue = result;
        document.getElementById("display").value = this.displayValue;
      } else {
        throw new Error("Result beyond 0-1000");
      }
    } catch (error) {
      document.getElementById("display").value = error.message;
    }
  }
  calculate3() {
    try {
      const sanitizedValue = this.displayValue.replace(/[^0-9+\-*/(). ]/g, "");
      const result = this.evaluateExpression(sanitizedValue);

      if (
        typeof result === "object" &&
        "quotient" in result &&
        "remainder" in result
      ) {
        const { quotient, remainder } = result;
        if (
          !isNaN(quotient) &&
          quotient >= 0 &&
          quotient <= 10000 &&
          !isNaN(remainder) &&
          remainder >= 0 &&
          remainder <= 10000
        ) {
          this.displayValue = `${quotient} remainder ${remainder}`;
          document.getElementById("display").value = this.displayValue;
        } else {
          throw new Error("result beyond limit.");
        }
      } else if (!isNaN(result) && result >= 0 && result <= 10000) {
        this.displayValue = result;
        document.getElementById("display").value = this.displayValue;
      } else {
        throw new Error("result beyond limit.");
      }
    } catch (error) {
      document.getElementById("display").value = "Result beyond 0-10000";
    }
  }

  evaluateExpression(expression) {
    const operators = new Set(["+", "-", "*", "/", "%"]);
    const stack = [];
    const postfix = this.infixToPostfix(expression);

    for (const token of postfix) {
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

    const result = stack.pop();

    if (
      typeof result === "object" &&
      "quotient" in result &&
      "remainder" in result
    ) {
      return result;
    }

    return result;
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
}

const calculator = new Calculator();
