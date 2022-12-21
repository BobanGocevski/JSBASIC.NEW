/*
WEIGHT CALCULATOR IN CHICKENS
Want to know how you wiegh in chikens? No problem!

Write a function named weightInChickens that:
Takes an input weight in kilograms
Calculates weight in chickens ( 1 chicken = 0.5kg )
The input should be entered through prompt
The result should be shown in the HTML of the page
Note:The html page needs to have title and result paragraph
*/

function weightInChickens(weight) {
    return weight / 0.5;
}

let resultDiv = document.getElementById("myDiv");
let input = parseInt(prompt("Please enter your wiegh:"));
if (!isNaN(input)) {
    resultDiv.innerHTML = `<h2>${input} kg is ${weightInChickens(input)} </h2>`
} else {
    resultDiv.innerHTML = `<h2>Wrong input.Enter a wiegh</h2>`
}