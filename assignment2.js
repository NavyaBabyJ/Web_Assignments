function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Add click event listeners to color options
document.getElementById("red").addEventListener("click", function () {
    changeBackgroundColor("red");
});

document.getElementById("blue").addEventListener("click", function () {
    changeBackgroundColor("blue");
});

document.getElementById("green").addEventListener("click", function () {
    changeBackgroundColor("green");
});