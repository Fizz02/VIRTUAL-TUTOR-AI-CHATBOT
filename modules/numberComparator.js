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
function compareNumbers1() {
  const num1 = parseFloat(document.getElementById("input1").value);
  const num2 = parseFloat(document.getElementById("input2").value);
  if (
    isNaN(num1) ||
    isNaN(num2) ||
    num1 < 0 ||
    num1 > 100 ||
    num2 < 0 ||
    num2 > 100
  ) {
    document.getElementById("resultcmp").innerText =
      "Sila masukkan nombor yang sah antara 0 dan 100.";
    return;
  }
  const comparisonResult = numberComparator.compareNumbers(num1, num2);
  document.getElementById("resultcmp").innerText = comparisonResult;
}
function compareNumbers2() {
  const num1 = parseFloat(document.getElementById("input1").value);
  const num2 = parseFloat(document.getElementById("input2").value);
  if (
    isNaN(num1) ||
    isNaN(num2) ||
    num1 < 0 ||
    num1 > 1000 ||
    num2 < 0 ||
    num2 > 1000
  ) {
    document.getElementById("resultcmp").innerText =
      "Sila masukkan nombor yang sah antara 0 dan 1000.";
    return;
  }
  const comparisonResult = numberComparator.compareNumbers(num1, num2);
  document.getElementById("resultcmp").innerText = comparisonResult;
}
function compareNumbers3() {
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
const numberComparator = new NumberComparator();
