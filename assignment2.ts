function removeNonPrintableCharacters(inputString: string): string {
    // Use a regular expression to match non-printable ASCII characters
    const regex = /[^\x20-\x7E]+/g;
    
    // Replace matched characters with an empty string
    const sanitizedString = inputString.replace(regex, '');

    return sanitizedString;
}

const originalString = "Hello, \x05World!\x1F";
const sanitizedString = removeNonPrintableCharacters(originalString);

console.log(sanitizedString); // Output: "Hello, World!"
