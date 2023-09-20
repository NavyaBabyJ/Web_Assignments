function toggleOtherTextbox() {
    const categoryDropdown = document.getElementById("category");
    const otherTextbox = document.getElementById("otherText");

    if (categoryDropdown.value === "Other") {
        otherTextbox.style.display = "block";
        otherTextbox.required = true;
    } else {
        otherTextbox.style.display = "none";
        otherTextbox.required = false;
        otherTextbox.value = ""; // Clear the text if it was previously filled
    }
}