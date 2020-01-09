const myList = document.getElementsByTagName('li');
 
for (let i = 0; i < myList.length; i +=1) {
	myList[i].style.color = 'green';
}

const error = document.getElementsByClassName('error');
 
for (let i = 0; i < error.length; i +=1) {
	error[i].style.color = 'red';
}

const evens = document.querySelectorAll('li:nth-child(even)');
 
for (let i = 0; i < evens.length; i +=1) {
	evens[i].style.backgroundColor = 'lightgray';
}

