 // Function to generate a random color
 function randomColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
}

// Function to change the color of the hovered box
function changeColor(element) {
    // Change background color to a random color
    element.style.backgroundColor = randomColor();
}



// function to refresh page
function refreshPage() {
    // Reload the current page
    location.reload();
}