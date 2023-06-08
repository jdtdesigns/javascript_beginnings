var clickOutput = document.querySelector('#click-output');
var clickBtn = document.querySelector('#click-btn');
var input = document.querySelector('#name-input');
var clicks = 0;

// Create a function that increases clicks each time the button is pressed and outputs the click amount to the window
function addClick() {
  // Increase clicks by one
  clicks++;
  // Output clicks to the h1
  clickOutput.innerText = 'Clicks: ' + clicks;
}

function saveUserClicks(eventObj) {
  if (eventObj.keyCode === 13) {
    console.log('do something');
  }
}

clickBtn.addEventListener('click', addClick);
input.addEventListener('keydown', saveUserClicks);