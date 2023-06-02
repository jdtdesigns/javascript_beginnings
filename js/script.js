var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '<', '>', '.', '?', '/'];


// Create a function that gets the amount of chars and returns a list of
// the amount and booleans for each of the char sets
// The function gathers the user's choices or options to create the password
function getUserInput() {
  var amount = Number(prompt('Please provide an amount of characters'));
  var includeLowercase = confirm('Click OK to include lowercase letters');
  var includeUppercase = confirm('Click OK to include uppercase letters');
  var includeNumbers = confirm('Click OK to include numbers');
  var includeSpecials = confirm('Click OK to include special characters');

  return [amount, includeLowercase, includeUppercase, includeNumbers, includeSpecials];
}


function generatePass() {
  var choices = getUserInput();
  // Generate a random password
  // Functions, conditionals, variables, for loops, concatenation (+ & +=)
  // .concat()
  // Variable to hold the resulting random password string
  var charAmount = choices[0];
  var includeLowercase = choices[1];
  var includeUppercase = choices[2];
  var includeNumbers = choices[3];
  var includeSpecials = choices[4];
  var pass = '';
  var allPossibleChars = [];

  if (includeLowercase) {
    allPossibleChars = allPossibleChars.concat(lowercase);
  }

  if (includeUppercase) {
    allPossibleChars = allPossibleChars.concat(uppercase);
  }

  if (includeNumbers) {
    allPossibleChars = allPossibleChars.concat(numbers);
  }

  if (includeSpecials) {
    allPossibleChars = allPossibleChars.concat(specialCharacters);
  }

  for (var count = 0; count < charAmount; count++) {
    // Grab a random character from the allPossibleChars array
    var randomNum = Math.random();
    var randomIndex = Math.floor(randomNum * allPossibleChars.length);
    var randomChar = allPossibleChars[randomIndex];

    pass += randomChar;
  }

  return pass;
}

var password = generatePass();

var outputParagraph = document.querySelector('.password-output');

outputParagraph.style.color = 'red';
outputParagraph.innerText = password;

var div = document.createElement('div');

div.insertAdjacentHTML('beforeend', '<h3>Inserted H3 header</h3>');

document.body.append(div);


// var num = 10;
// var str = 'some string';

// console.log(str[6]);

// if (0) {
//   console.log('some stuff');
// }

// var fruits = ['orange', 'apple', 'grape'];

// console.log(fruits[fruits.length - 1])











// function test() {
//   var something = 'something again';

//   return something;
// }


// console.log(test());
























