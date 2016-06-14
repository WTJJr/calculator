//Homework: 
// Use the HTML provided in index.html below and set up a new project
// Create a main.js file and link it to your index.html file
// When I click the "calculate" button, the values in the first box should be added to the value in the second box.
// Your output should be injected into the answer element
// Add some styles to this project and make it something pretty to look at.

// I need these steps to happen:
// Place user inputs into variables (val1 and val2)
// Take User Inputs and add together when I click the 'calculate button'
// Inject the sum into the #answer span.
// All of these can be triggered in cascading fashion by making a function,
//triggered by an event.



// Objects in the DOM have the following structure:

// cheese {
// 	color: yellow,
// 	size: medium,
// 	type: cheddar
// }

// cheese.size -- >(returns) medium

//Thus:  document.querySelector(data) actually looks like:
// document {
// 	querySelector: function(data){
// 		function-stuff;
// 		};
// };


//Thus: whatever.addEventListener  - runs the addEventListener function
//stored in the 'whatever' object.

var button = document.querySelector("#calculate-button");
button.addEventListener('click', function(event) {
	event.preventDefault();
	var input1 = document.querySelector("#value-one");
	var input2 = document.querySelector("#value-two");
	var val1 = Number(input1.value); //This causes the input1.value and
	var val2 = Number(input2.value); //input2.value to be treated as 
	var calcOutput = val1 + val2; //numbers instead of as strings.
	var answer = document.querySelector("#answer");
	answer.textContent = calcOutput;
});