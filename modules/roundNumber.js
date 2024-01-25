function roundNumber1() {
    const number = parseInt(document.getElementById('inputNumber').value);

    if (isNaN(number) || number < 0 || number > 100) {
        document.getElementById('resultr').innerText = 'Sila masukkan nombor yang sah antara 0 dan 100.';
        return;
    }
    const roundedNumber = Math.round(number / 10) * 10;
    document.getElementById('resultr').innerText = `Bundar kepada Puluh yang terdekat : ${roundedNumber}`;
}
function roundNumber2() {
    const number = parseInt(document.getElementById("inputNumber").value);
    const roundingOption = parseInt(
      document.getElementById("roundingOption").value
    );
    if (isNaN(number) || number < 0 || number > 1000) {
      document.getElementById("resultr").innerText =
        "Sila masukkan nombor yang sah antara 0 dan 1000.";
      return;
    }
    const roundedNumber = Math.round(number / roundingOption) * roundingOption;
    document.getElementById("resultr").innerText = `Bundar kepada ${
      roundingOption === 10 ? "Puluh" : roundingOption === 100 ? "Ratus" : "Ribu"
    } yang terdekat: ${roundedNumber}`;
  }
  function roundNumber3() {
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