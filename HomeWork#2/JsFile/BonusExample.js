/* Write javascript code that will get an input for five different numbers and will print the maximum number in an alert box.

Use conditional statements, do not use loops and arrays. Use prompt to get input and parseInt to get the number from the input.

Hint: In order to get an input five times, you must ask for input five times.
*/

var input1 = parseInt(prompt("Enter first value ")) //a
var input2 = parseInt(prompt("Enter secound value ")) //b
var input3 = parseInt(prompt("Enter third value ")) //c 
var input4 = parseInt(prompt("Enter fourth value ")) //d
var input5 = parseInt(prompt("Enter  fifth value ")) //f

if (input1 > input2 && input1 > input3 && input1 > input4 && input1 > input5) {
    console.log(input1);

} else if (input2 > input1 && input2 > input3 && input2 > input4 && input2 > input5) {
    console.log(input2);

}
else if (input3 > input1 && input3 > input2 && input3 > input4 && input4 > input5) {
    console.log(input3);

}
else if (input4 > input1 && input4 > input2 && input4 > input3 && input4 > input5) {
    console.log(input4);

}
else {
    console.log(input5);
}