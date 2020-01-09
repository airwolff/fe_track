// const myHeading = document.getElementById('myHeading');
// const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
// const myHeading = document.getElementsByTagName('h1')[0];

// myButton.addEventListener('click', () => {
//   myHeading.style.color = myTextInput.value;
// });
const myList = document.getElementsByTagName('li')[0];

myList.addEventListener('click', () => {
	myList.style.color = myTextInput.value;
});
