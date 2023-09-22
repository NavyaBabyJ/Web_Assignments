function numberToDigits(number: number): number[] {
    const numberString = number.toString();
    const digitsArray: number[] = [];

    for (let i = 0; i < numberString.length; i++) {
        const digit = parseInt(numberString[i]);
        if (!isNaN(digit)) {
            digitsArray.push(digit);
        }
    }

    return digitsArray;
}

const number = 112233;
const digits = numberToDigits(number);

console.log(digits);
