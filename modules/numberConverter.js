class NumberConverter {
  constructor() {
    this.number = 0;
  }

  setNumber(number) {
    this.number = number;
  }

  numberToWords() {
    const units = [
      "", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "lapan", "sembilan", "sepuluh",
      "sebelas", "dua belas", "tiga belas", "empat belas", "lima belas", "enam belas", "tujuh belas",
      "lapan belas", "sembilan belas",
    ];
    const tens = ["", "sepuluh", "dua puluh", "tiga puluh", "empat puluh", "lima puluh", "enam puluh",
      "tujuh puluh", "lapan puluh", "sembilan puluh",
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

function handleConversionError(input, min, max, message) {
  if (isNaN(input) || input < min || input > max) {
    document.getElementById("result").innerText = message;
    return true; // Return true to indicate that an error occurred
  }
  return false; // Return false if there is no error
}

function handleNumberConversion(min, max, errorMessage) {
  const numberInput = parseInt(document.getElementById("numberInput").value, 10);
  numberConverter.setNumber(numberInput);

  if (handleConversionError(numberInput, min, max, errorMessage)) {
    return;
  }

  const words = numberConverter.numberToWords();
  displayResult(words);
}

function displayResult(words) {
  document.getElementById("result").innerText = words;
}

const numberConverter = new NumberConverter();

function convertNumber1() {
  handleNumberConversion(0, 100, "Sila masukkan nombor yang sah antara 0 dan 100.");
}

function convertNumber2() {
  handleNumberConversion(0, 1000, "Sila masukkan nombor yang sah antara 0 dan 1000.");
}

function convertNumber3() {
  handleNumberConversion(0, 10000, "Sila masukkan nombor yang sah antara 0 dan 10000.");
}
