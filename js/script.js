var students = ['John', 'FSF', 'Jamil', 'FSF', 'Roman', 'FSF'];


// for (var index = 0; index < students.length; index += 2) {
//   printStudentInfo(students[index], students[index + 1]);
// }


// function printStudentInfo(studentName, studentCourse) {
//   console.log('Welcome to the class!');
//   console.log('Name:', studentName);
//   console.log('Course:', studentCourse);
//   console.log('Please utilize office hours for help!\n\n');
// }

// printStudentInfo(students[2], students[3]);


// function printStuff(name, age, fruits) {
//   var output = '';

//   for (var index = 0; index < fruits.length; index++) {
//     if (index === 0) {
//       output += fruits[index];
//     } else {
//       output += ', ' + fruits[index];
//     }
//   }

//   console.log(output);
// }

// printStuff('JD', 43, ['apple', 'orange', 'grape']);

var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '<', '>', '.', '?', '/'];
var combined = lowercase.concat(uppercase).concat(numbers).concat(specialCharacters);

// Create an amount of characters that I want to generate
var amount = 50;

// Create a variable that will hold the resulting finished string
var password = '';

// Loop the given amount and generate a random character from the array
for (var count = 0; count < amount; count++) {
  var randomNum = Math.random();
  var randomIndex = Math.floor(randomNum * combined.length);

  // Concatenate the random letter onto the end of the result string
  password += combined[randomIndex];
}

// After the loop completes, print the result to the console
console.log(password);




















