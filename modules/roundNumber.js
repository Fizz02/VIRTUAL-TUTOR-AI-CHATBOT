function handleInputError(inputValue, minValue, maxValue, errorMessage) {
    if (isNaN(inputValue) || inputValue < minValue || inputValue > maxValue) {
        document.getElementById('resultr').innerText = errorMessage;
        return true; // Indicates an error
    }
    return false; // No error
}

function handleResultr(result) {
  document.getElementById("resultr").innerText = result;
}

function roundNumber1() {
    const number = parseInt(document.getElementById('inputNumber').value);

    if (handleInputError(number, 0, 100, 'Sila masukkan nombor yang sah antara 0 dan 100.')) {
        return;
    }

    const roundedNumber = Math.round(number / 10) * 10;
    handleResultr(`Bundar kepada Puluh yang terdekat : ${roundedNumber}`);
}


function roundNumber2() {
    const number = parseInt(document.getElementById("inputNumber").value);
    const roundingOption = parseInt(document.getElementById("roundingOption").value);

    if (handleInputError(number, 0, 1000, 'Sila masukkan nombor yang sah antara 0 dan 1000.')) {
        return;
    }

    const roundedNumber = Math.round(number / roundingOption) * roundingOption;
    handleResultr(`Bundar kepada ${
        roundingOption === 10 ? "Puluh" : roundingOption === 100 ? "Ratus" : "Ribu"
    } yang terdekat: ${roundedNumber}`);
}

function roundNumber3() {
    const number = parseInt(document.getElementById("inputNumber").value);
    const roundingOption = parseInt(document.getElementById("roundingOption").value);

    if (handleInputError(number, 0, 10000, 'Sila masukkan nombor yang sah antara 0 dan 10000.')) {
        return;
    }

    const roundedNumber = Math.round(number / roundingOption) * roundingOption;
    handleResultr(`Bundar kepada ${
        roundingOption === 10 ? "Puluh" : roundingOption === 100 ? "Ratus" : "Ribu"
    } yang terdekat: ${roundedNumber}`);
}
