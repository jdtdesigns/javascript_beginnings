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

function clearData() {
  input.value = '';
  clicks = 0;
  clickOutput.innerText = 'Clicks: 0';
}

function getUserData() {
  var rawData = localStorage.getItem('users');
  var parsed = JSON.parse(rawData) || [];

  return parsed;
}

function saveUserData(arr) {
  var jsonVal = JSON.stringify(arr);

  localStorage.setItem('users', jsonVal);
}

function saveUserClicks(eventObj) {
  if (eventObj.keyCode === 13) {
    var userScore = {
      name: input.value,
      clicks: clicks
    };

    var usersArray = getUserData();
    usersArray.push(userScore);

    saveUserData(usersArray);
    showScores();

    clearData();
  }
}

function showScores() {
  var users = getUserData();
  var scoresDiv = document.querySelector('.scores');

  scoresDiv.innerHTML = '';

  if (users.length === 0) {
    scoresDiv.innerHTML = '<p>No scores have been added.</p>';
  }

  for (var userObj of users) {
    var div = document.createElement('div');
    div.classList.add('score');

    var h3 = document.createElement('h3');
    h3.innerText = `Name: ${userObj.name}`;
    div.append(h3);

    var p = document.createElement('p');
    p.innerText = `Clicks: ${userObj.clicks}`;
    div.append(p);

    scoresDiv.append(div);
  }
}

clickBtn.addEventListener('click', addClick);
input.addEventListener('keydown', saveUserClicks);

showScores();