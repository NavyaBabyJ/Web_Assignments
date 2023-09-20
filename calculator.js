
function clearResult() {
    document.getElementById('result').textContent = '0';
}

function appendToResult(value) {
    const result = document.getElementById('result');
    const currentResult = result.textContent;

    if (currentResult === '0' && value !== '.') {
        result.textContent = value;
    } else {
        result.textContent = currentResult + value;
    }
}

function calculateResult() {
    const result = document.getElementById('result');
    const currentResult = result.textContent;

    try {
        const calculatedResult = eval(currentResult);
        result.textContent = calculatedResult;
    } catch (error) {
        result.textContent = 'Error';
    }
}