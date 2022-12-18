/*
How many times is a number contained in an array

Write a function named findNumber that:
Takes 2 arguments: number, array
Calculates how many times the number is contained in an array with numbers
Outputs the result to the screen like so: "There is 4 occurrences of number 5 in the array"
Call the function three times with different arrays.
*/



function findNumber(array, number, x) {
    let res = 0;
    for (let i = 0; i < number; i++) {
        if (x == array[i])
            res++;
    }
    console.log(`There is ${res} occurrences of number ${x} in the array`)
}

array = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8]
let number = array.length;
let x = 2;

findNumber(array, number, x);