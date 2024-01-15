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
    }

    deleteChar() {
        this.displayValue = this.displayValue.slice(0, -1);
        document.getElementById('display').value = this.displayValue;
    }

    calculate() {
        try {
            const result = eval(this.displayValue);
            if (!isNaN(result) && result >= 0 && result <= 10000 && /^[0-9+\-*/. ]+$/.test(this.displayValue)) {
                this.displayValue = result;
                document.getElementById('display').value = this.displayValue;
            } else {
                throw new Error('Result beyond limit.');
            }
        } catch (error) {
            document.getElementById('display').value = 'Result beyond 0-10000';
        }
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
        const units = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'lapan', 'sembilan', 'sepuluh',
            'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'lapan belas', 'sembilan belas'
        ];
        const tens = ['', 'sepuluh', 'dua puluh', 'tiga puluh', 'empat puluh', 'lima puluh', 'enam puluh', 'tujuh puluh', 'lapan puluh', 'sembilan puluh'];
        if (this.number === 0) {
            return 'kosong';
        }
        let words = '';
        if (this.number >= 10000) {
            words += units[Math.floor(this.number / 10000)] + ' puluh ribu ';
            this.number %= 10000;
        }
        if (this.number >= 1000) {
            words += units[Math.floor(this.number / 1000)] + ' ribu ';
            this.number %= 1000;
        }
        if (this.number >= 100) {
            words += units[Math.floor(this.number / 100)] + ' ratus ';
            this.number %= 100;
        }
        if (this.number >= 20) {
            words += tens[Math.floor(this.number / 10)] + ' ';
            this.number %= 10;
        }
        if (this.number > 0) {
            words += units[this.number];
        }
        return words.trim();
    }
}

function convertNumber() {
    const numberInput = parseInt(document.getElementById('numberInput').value, 10);
    numberConverter.setNumber(numberInput);

    if (isNaN(numberInput) || numberInput < 0 || numberInput > 10000) {
        document.getElementById('result').innerText = 'Sila masukkan nombor yang sah antara 0 dan 10000.';
        return;
    }

    const words = numberConverter.numberToWords();
    document.getElementById('result').innerText = words;
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
    const num1 = parseFloat(document.getElementById('input1').value);
    const num2 = parseFloat(document.getElementById('input2').value);
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultcmp').innerText = 'Please enter valid numbers.';
        return;
    }
    const comparisonResult = numberComparator.compareNumbers(num1, num2);
    document.getElementById('resultcmp').innerText = comparisonResult;
}
function roundNumber() {
    const number = parseInt(document.getElementById('inputNumber').value);
    const roundingOption = parseInt(document.getElementById('roundingOption').value);
    if (isNaN(number)) {
        document.getElementById('resultr').innerText = 'Please enter a valid number.';
        return;
    }
    const roundedNumber = Math.round(number / roundingOption) * roundingOption;
    document.getElementById('resultr').innerText = `Bundar kepada ${roundingOption === 10 ? 'Puluh' : (roundingOption === 100 ? 'Ratus' : 'Ribu')} yang terdekat: ${roundedNumber}`;
}
const calculator = new Calculator();
const numberConverter = new NumberConverter();
const numberComparator = new NumberComparator();