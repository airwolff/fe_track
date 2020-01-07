const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementByi('myTextInput');

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
});
