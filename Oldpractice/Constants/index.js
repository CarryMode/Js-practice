//constants = variable that cant change

const PI = 3.14159;
let radius;
let circumference;


// radius = window.prompt('Enter the radius of a circle');
// radius = Number(radius);



document.getElementById('mySubmit').onclick = function(){
	radius = document.getElementById('myText').value;
	radius = Number(radius);
	circumference = 2 * PI * radius;
	document.getElementById('myH3').textContent = circumference;
}

