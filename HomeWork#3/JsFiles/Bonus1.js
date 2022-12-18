/*
THE AGE CALCULATOR
Forgot how old you are? Calculate it!

Write a function named calculateAge that:
takes 2 arguments: birth year, current year.
calculates the age based on those years.
outputs the result to the screen like so: "You are NN years old"
Call the function three times with different sets of values.
Figure out how to get the current year in JavaScript instead of passing it in.
*/


function calculateAge(birthYear, currentYear) {
    var birthYear;
    var currentYear;
    age = currentYear - birthYear;
    console.log(`You are ${age} years old`);

}
calculateAge(1997, 2022);
calculateAge(1998, 2022);
calculateAge(1971, 2022);
calculateAge(1973, 2022);
calculateAge(1967, 2022);
calculateAge(1970, 2022);