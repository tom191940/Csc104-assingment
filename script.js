function calculateSimpleInterest() {
    const principal = parseFloat(document.getElementById('si-principal-1').value);
    const rate = parseFloat(document.getElementById('si-rate-1').value);
    const time = parseFloat(document.getElementById('si-time-1').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        document.getElementById('si-result-1').textContent = "Please enter valid inputs.";
        return;
    }

    const interest = (principal * rate * time) / 100;
    document.getElementById('si-result-1').textContent = `Simple Interest: ${interest.toFixed(2)}`;
}

function calculateCompoundInterest() {
    const principal = parseFloat(document.getElementById('ci-principal-2').value);
    const rate = parseFloat(document.getElementById('ci-rate-2').value) / 100;
    const time = parseFloat(document.getElementById('ci-time-2').value);
    const compounds = parseInt(document.getElementById('ci-compounds-2').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || isNaN(compounds)) {
        document.getElementById('ci-result-2').textContent = "Please enter valid inputs.";
        return;
    }

    const amount = principal * ((1 + rate / compounds), compounds * time);
    const interest = amount - principal;
    document.getElementById('ci-result-2').textContent = `Compound Interest: ${interest.toFixed(2)}`;
}

function calculateCGPA() {
    const gradesInput = document.getElementById('cgpa-grades-3').value;
    const grades = gradesInput.split(',').map(grade => parseFloat(grade.trim()));

    if (grades.some(isNaN)) {
        document.getElementById('cgpa-result-3').textContent = "Please enter valid grades.";
        return;
    }

    const total = grades.reduce((acc, grade) => acc + grade, 0);
    const cgpa = total / grades.length;
    document.getElementById('cgpa-result-3').textContent = `CGPA: ${cgpa.toFixed(2)}`;
}

function convertTemperature() {
    const fahrenheit = parseFloat(document.getElementById('temp-fahrenheit-4').value);

    if (isNaN(fahrenheit)) {
        document.getElementById('temp-result-4').textContent = "Please enter a valid temperature.";
        return;
    }

    const celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById('temp-result-4').textContent = `Celsius: ${celsius.toFixed(2)}`;
}

const exchangeRate = 1461.91;

function convertCurrencyToNaira() {
    const usd = parseFloat(document.getElementById('usd-amount-5').value);

    if (isNaN(usd)) {
        document.getElementById('usd-to-ngn-result-5').textContent = "Please enter a valid amount.";
        return;
    }

    const naira = usd * exchangeRate;
    document.getElementById('usd-to-ngn-result-5').textContent = `₦${naira.toFixed(2)}`;
}

function convertCurrencyToUSD() {
    const naira = parseFloat(document.getElementById('ngn-amount-6').value);

    if (isNaN(naira)) {
        document.getElementById('ngn-to-usd-result-6').textContent = "Please enter a valid amount.";
        return;
    }

    const usd = naira / exchangeRate;
    document.getElementById('ngn-to-usd-result-6').textContent = `$${usd.toFixed(2)}`;
}
