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
function convertNumber1() {
  const numberInput = parseInt(
    document.getElementById("numberInput").value,
    10
  );
  numberConverter.setNumber(numberInput);

  if (isNaN(numberInput) || numberInput < 0 || numberInput > 100) {
    document.getElementById("result").innerText =
      "Sila masukkan nombor yang sah antara 0 dan 100.";
    return;
  }

  const words = numberConverter.numberToWords();
  document.getElementById("result").innerText = words;
}
function convertNumber2() {
  const numberInput = parseInt(
    document.getElementById("numberInput").value,
    10
  );
  numberConverter.setNumber(numberInput);

  if (isNaN(numberInput) || numberInput < 0 || numberInput > 1000) {
    document.getElementById("result").innerText =
      "Sila masukkan nombor yang sah antara 0 dan 1000.";
    return;
  }

  const words = numberConverter.numberToWords();
  document.getElementById("result").innerText = words;
}
function convertNumber3() {
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

const numberConverter = new NumberConverter();
