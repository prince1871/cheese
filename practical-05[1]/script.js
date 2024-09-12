

// Function to generate a random number between 0 and 255
function getRandomNumber() {
  return Math.floor(Math.random() * 256);
}

// Function to change the background color of the div
function changeBackgroundColor() {

// Generate random values for red, green, and blue
const red = getRandomNumber();
const green = getRandomNumber();
const blue = getRandomNumber();

// Create the RGB color string
const bgColor = `rgb(${red}, ${green}, ${blue})`;

// Select the element you want to apply the background color to
const selectedDiv = document.getElementById('colorBox');

// Apply the generated background color
selectedDiv.style.backgroundColor = bgColor;

// Optional: Update text to display the RGB values
// selectedDiv.textContent = `RGB(${red}, ${green}, ${blue})`;

}

// Initial call to set a random color when the page loads
changeBackgroundColor();
