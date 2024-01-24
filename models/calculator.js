class Calculator {
    constructor() {
        this.displayValue = '';
    }
    addToDisplay(value) {
        this.displayValue += value;
        document.getElementById('display').value = this.displayValue;
    }

    clearDisplay() {
        this.displayValue = '';
        document.getElementById('display').value = this.displayValue;
        this.operatorCount = 0;
    }

    deleteChar() {
        this.displayValue = this.displayValue.slice(0, -1);
        document.getElementById('display').value = this.displayValue;
    }

    calculate() {
        try {
            const sanitizedValue = this.displayValue.replace(/[^0-9+\-*/(). ]/g, '');
            const result = this.evaluateExpression(sanitizedValue);

            if (!isNaN(result) && result >= 0 && result <= 100) {
                this.displayValue = result;
                document.getElementById('display').value = this.displayValue;
            } else {
                throw new Error('result beyond limit.');
            }
        } catch (error) {
            document.getElementById('display').value = 'Result beyond 0-100';
        }
    }

    evaluateExpression(expression) {
        const operators = new Set(['+', '-', '*', '/']);
        const stack = [];
        const postfix = this.infixToPostfix(expression);

        for (const token of postfix) {
            if (!operators.has(token)) {
                stack.push(parseFloat(token));
            } else {
                const operand2 = stack.pop();
                const operand1 = stack.pop();

                switch (token) {
                    case '+':
                        stack.push(operand1 + operand2);
                        break;
                    case '-':
                        stack.push(operand1 - operand2);
                        break;
                    case '*':
                        stack.push(operand1 * operand2);
                        break;
                    case '/':
                        stack.push(operand1 / operand2);
                        break;
                }
            }
        }

        return stack.pop();
    }

    infixToPostfix(infix) {
        const output = [];
        const stack = [];
        const operators = {
            '+': 1,
            '-': 1,
            '*': 2,
            '/': 2,
        };

        const isOperator = (token) => operators.hasOwnProperty(token);

        for (const token of infix.match(/\d+|[+\-*/()]/g)) {
            if (!isNaN(token)) {
                output.push(token);
            } else if (token === '(') {
                stack.push(token);
            } else if (token === ')') {
                while (stack.length > 0 && stack[stack.length - 1] !== '(') {
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

module.exports = Calculator;