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
  calculate() {
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
      document.getElementById("display").value = "Result beyond 0-100";
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
class NumberConverter {
  constructor() {
    this.number = 0;
  }

  setNumber(number) {
    this.number = number;
  }

  numberToWords() {
    const units = [
      "",
      "satu",
      "dua",
      "tiga",
      "empat",
      "lima",
      "enam",
      "tujuh",
      "lapan",
      "sembilan",
      "sepuluh",
      "sebelas",
      "dua belas",
      "tiga belas",
      "empat belas",
      "lima belas",
      "enam belas",
      "tujuh belas",
      "lapan belas",
      "sembilan belas",
    ];
    const tens = [
      "",
      "sepuluh",
      "dua puluh",
      "tiga puluh",
      "empat puluh",
      "lima puluh",
      "enam puluh",
      "tujuh puluh",
      "lapan puluh",
      "sembilan puluh",
    ];
    if (this.number === 0) {
      return "kosong";
    }
    let words = "";
    if (this.number >= 10000) {
      words += units[Math.floor(this.number / 10000)] + " puluh ribu ";
      this.number %= 10000;
    }
    if (this.number >= 1000) {
      words += units[Math.floor(this.number / 1000)] + " ribu ";
      this.number %= 1000;
    }
    if (this.number >= 100) {
      words += units[Math.floor(this.number / 100)] + " ratus ";
      this.number %= 100;
    }
    if (this.number >= 20) {
      words += tens[Math.floor(this.number / 10)] + " ";
      this.number %= 10;
    }
    if (this.number > 0) {
      words += units[this.number];
    }
    return words.trim();
  }
}

function convertNumber() {
  const numberInput = parseInt(
    document.getElementById("numberInput").value,
    10
  );
  numberConverter.setNumber(numberInput);

  if (isNaN(numberInput) || numberInput < 0 || numberInput > 10000) {
    document.getElementById("result").innerText =
      "Sila masukkan nombor yang sah antara 0 dan 10000.";
    return;
  }

  const words = numberConverter.numberToWords();
  document.getElementById("result").innerText = words;
}

class NumberComparator {
  compareNumbers(num1, num2) {
    if (num1 === num2) {
      return `${num1} = ${num2}`;
    } else if (num1 < num2) {
      return `${num1} < ${num2}`;
    } else {
      return `${num1} > ${num2}`;
    }
  }
}
function compareNumbers() {
  const num1 = parseFloat(document.getElementById("input1").value);
  const num2 = parseFloat(document.getElementById("input2").value);
  if (
    isNaN(num1) ||
    isNaN(num2) ||
    num1 < 0 ||
    num1 > 10000 ||
    num2 < 0 ||
    num2 > 10000
  ) {
    document.getElementById("resultcmp").innerText =
      "Sila masukkan nombor yang sah antara 0 dan 10000.";
    return;
  }
  const comparisonResult = numberComparator.compareNumbers(num1, num2);
  document.getElementById("resultcmp").innerText = comparisonResult;
}
function roundNumber() {
  const number = parseInt(document.getElementById("inputNumber").value);
  const roundingOption = parseInt(
    document.getElementById("roundingOption").value
  );
  if (isNaN(number) || number < 0 || number > 10000) {
    document.getElementById("resultr").innerText =
      "Sila masukkan nombor yang sah antara 0 dan 10000.";
    return;
  }
  const roundedNumber = Math.round(number / roundingOption) * roundingOption;
  document.getElementById("resultr").innerText = `Bundar kepada ${
    roundingOption === 10 ? "Puluh" : roundingOption === 100 ? "Ratus" : "Ribu"
  } yang terdekat: ${roundedNumber}`;
}
const calculator = new Calculator();
const numberConverter = new NumberConverter();
const numberComparator = new NumberComparator();
