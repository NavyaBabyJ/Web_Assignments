function capitalizeFirstLetter(inputString: string): string {
    // Check if the input string is empty or null
    if (!inputString) {
        return inputString;
    }

    // Capitalize the first letter and concatenate the rest of the string
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

const egString = "hello world";
const capitalizedString = capitalizeFirstLetter(egString);

console.log(capitalizedString);
