/*
Write a JavaScript function that will return:

Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
Note: Call the function in console to see answer
Bonus: Make the same function work for converting dog to human years as well
*/

function CalDogAge(age) {
    var dogYears = 7*age;
    console.log(`Your dog is ${dogYears} years old!`);
}

CalDogAge(parseInt(prompt("Insert your dog age")))

function DogAge (age1){
    var humanAge = age1/7;
    console.log(`Your age like human is ${humanAge}`);

}

DogAge(25);
