// Target all the li's in the ul and add an event
// listener to each li that console logs the innerText
// of the li
// var liArray = document.querySelectorAll('ul li');



// // Add an click event listener to each li in the array
// // above
// for (var i = 0; i < liArray.length; i++) {
//   liArray[i].addEventListener('click', clicked);
// }

// Target the ul and add an event listener that console
// logs the innerText of the li that was clicked
var ul = document.querySelector('ul');
var userAnswer = 'Document Object Model';

function clicked(eventObj) {
  var el = eventObj.target;

  if (el.tagName === 'LI') {
    if (el.innerText === userAnswer) {
      console.log('You are correct!');
      el.classList.add('green');
      alert('You are correct!');
    } else {
      console.log('Wrong...');
    }
  }
}

ul.addEventListener('click', clicked);










// var ul = document.querySelector('ul');
var addLiBtn = document.querySelector('button');

addLiBtn.addEventListener('click', function () {
  var li = document.createElement('li');
  li.innerText = 'New Item';
  ul.append(li);
});
