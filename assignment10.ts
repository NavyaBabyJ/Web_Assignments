function colorText(text: string, colorCode: string): string {
    // ANSI escape codes for text color
    const reset = '\x1b[0m';
    const coloredText = `${colorCode}${text}${reset}`;
    return coloredText;
}

// Example usage:
const redText = colorText('This is red text', '\x1b[31m'); // Red text
const greenText = colorText('This is green text', '\x1b[32m'); // Green text

console.log(redText);
console.log(greenText);
