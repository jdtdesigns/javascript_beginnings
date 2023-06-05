// var fruits = ['apple', 'grape', 'kiwi'];


var users = [
  {
    name: 'JD',
    age: 43
  },
  {
    name: 'Jane',
    age: 35,
    hobbies: ['tennis', 'hiking']
  },
  {
    name: 'Bob',
    healthcare: {
      locations: {
        pharmacy: '555 Cool St.',
        emergency: '555 Help Dr.'
      },
      medications: {
        amount: 50,
        types: [
          {
            bloodPressure: 'Amlodapine',
            pillSize: '10mg'
          },
          {
            painRelief: 'Tylenol',
            pillSize: '500mg'
          }
        ]
      }
    },
    age: 99
  }
];

// var jane = users.find(function (userObj) {
//   if (userObj.name === 'Jane') return true;
// });

// console.log(jane);

// console.log(users[2].healthcare.medications.types[1].pillSize);


// var str = 'some string';

// str = str.slice(3);

// console.log(str);
// console.log(str.length);



var jd = {
  name: 'JD',
  age: 43,
  hobbies: ['pickleball', 'fishing'],
  haveBirthday: function () {
    this.age++;
  },
  printSomething: function (txt) {
    console.log(txt);
  },
  printAge: function () {
    console.log(this.age);
  },
  printHobbiesByIndex: function (index) {
    console.log(this.hobbies[index]);
  }
}

// jd.printAge();

var un = {
  something: ['apple', 'orange']
};


// const fruits = ['apple', 'orange', 'grape', { name: 'JD' }, ['one', 'two']];

// var result = fruits.includes(['one', 'two']);

// var 











// console.log(un.blah);

// jd.printHobbiesByIndex(0);

// joe.printSomething('some different text');
// jd.printAge();

// jd.haveBirthday();

// jd.printAge();



// function someFunc() {

// }













var oldStudentData = ['Matthew', 'FSF'];
var studentData = {
  name: 'Matthew',
  course: 'FSF',
  university: 'Rutgers',
  location: 'Jersey',
  age: 26,
  someFunc: function () {
    console.log('wait, what?!!');
  },
  printInfo: function () {
    console.log('Name: ', this.name);
  }
};


// studentData.printInfo();

















// var studentName = students[0];

// var studentCourse = students[1];

// var studentName = studentData.name;
// var studentCourse = studentData.course;

// console.log(studentName, studentCourse);

// console.log(studentData.location);

// var fruits = ['orange', 'apple', 'grape'];
// var str = 'some string';

// console.log(str.length);

// var strData = {
//   value: 'some string',
//   length: 11
// };

