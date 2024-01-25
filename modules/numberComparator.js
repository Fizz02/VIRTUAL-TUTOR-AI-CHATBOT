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

function displayError(message) {
  document.getElementById("resultcmp").innerText = message;
}

function handleResult(result) {
  try {
    // Perform synchronous operations here
    document.getElementById("resultcmp").innerText = result;
  } catch (error) {
    document.getElementById("resultcmp").innerText = "Error in handleResult:" +  error;
  }
}

function compareNumbers(num1, num2, maxRange, errorMessage) {
  if (isNaN(num1) || isNaN(num2) || num1 < 0 || num1 > maxRange || num2 < 0 || num2 > maxRange) {
    displayError(errorMessage);
    return;
  }

  const comparisonResult = numberComparator.compareNumbers(num1, num2);
  handleResult(comparisonResult);
}

const numberComparator = new NumberComparator();

function compareNumbers1() {
  const num1 = parseFloat(document.getElementById("input1").value);
  const num2 = parseFloat(document.getElementById("input2").value);
  compareNumbers(num1, num2, 100, "Sila masukkan nombor yang sah antara 0 dan 100.");
}

function compareNumbers2() {
  const num1 = parseFloat(document.getElementById("input1").value);
  const num2 = parseFloat(document.getElementById("input2").value);
  compareNumbers(num1, num2, 1000, "Sila masukkan nombor yang sah antara 0 dan 1000.");
}

function compareNumbers3() {
  const num1 = parseFloat(document.getElementById("input1").value);
  const num2 = parseFloat(document.getElementById("input2").value);
  compareNumbers(num1, num2, 10000, "Sila masukkan nombor yang sah antara 0 dan 10000.");
}
