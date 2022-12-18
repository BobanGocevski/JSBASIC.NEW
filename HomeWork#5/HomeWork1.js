/*
Decription: The Math object allows you to perform mathematical tasks.
Math.pow(x,y); - Returns the value of x to the power of y
Action: Write a JavaScript program to write the sum of squares of the numbers from 101 to 150
*/



let array1 = []
function findNumber(num1, num2) {
    for (num1; num1 <= num2; num1++) {
        array1.push(num1);
    }
}

function sqrtNumber(array) {
    let sum = 0;
    for (let number of array) {
        sum += Math.pow(number, 2);
        console.log(sum);
    }
}



findNumber(101, 150);
sqrtNumber(array1);