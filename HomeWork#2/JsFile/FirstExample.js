/* Write Js code that will get an input for the name and surname of a person and then print a greeting:
Example: Hello, I am Ana Anevska.
Hint use concatenation/interpolation of strings */

var sentance = "I am "
var greeting = "Hello,"
var firstName = "Boban"
var lastName = "Gocevski"

//First result

var result = (greeting + sentance + firstName + " " + lastName); // ovde dodaov prazen string za vo console da mi se ispecati prazno mesto megu imeto i prezime dali vaka moze? 
console.log("Result of concatenation :")
console.log(result);

//Secoud result

console.log("Hello" + " " + "I am " + "boban" + " " + "gocevski");
