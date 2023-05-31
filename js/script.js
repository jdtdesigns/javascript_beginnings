var students = ['John', 'FSF', 'Jamil', 'FSF', 'Roman', 'FSF'];


for (var index = 0; index < students.length; index += 2) {
  console.log('Name:', students[index]);
  console.log('Course:', students[index + 1]);
}


function printStudentInfo(studentName, studentCourse) {
  console.log('Welcome to the class!');
  console.log('Name:', studentName);
  console.log('Course:', studentCourse);
  console.log('Please utilize office hours for help!');
}

printStudentInfo(students[2], students[3]);


function printStuff(something, name, age) {
  console.log(something);
}

printStuff('JD', 43, 'something');