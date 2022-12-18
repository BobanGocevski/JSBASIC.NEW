//Write JS code that will get an input from the user and calculate which Chinese zodiac a given year is in, Formula for chinese zodiac calculation (year-4)%12.
//Possible values:

// 0-Rat           3-Rabbit      6- Horse        9-Rooster
// 1-Ox            4-Dragon      7-Goat          10-Dog
// 2-Tirger        5-Snake       8-Moneky        11-Pig


//Hint: Use conditional statments (if else and else-if )

var year = parseInt(prompt("Enter your year"))
var zodiacsign = (year - 4) % 12



if ((year >= 1924 && year <= 2031) && zodiacsign == 0) {
    console.log("Rat")
}
else if ((year >= 1924 && year <= 2031) && zodiacsign == 1) {
    console.log("0x")
}
else if ((year >= 1924 && year <= 2031) && zodiacsign == 2) {
    console.log("Tigar")
}
else if ((year >= 1924 && year <= 2031) && zodiacsign == 3) {
    console.log("Rabbit ")
}
else if ((year >= 1924 && year <= 2031) && zodiacsign == 4) {
    console.log("Dragon")
}
else if ((year >= 1924 && year <= 2031) && zodiacsign == 5) {
    console.log("Snake")
}
else if ((year >= 1924 && year <= 2031) && zodiacsign == 6) {
    console.log("Horse")
}
else if ((year >= 1924 && year <= 2031) && zodiacsign == 7) {
    console.log("Goat")
}
else if ((year >= 1924 && year <= 2031) && zodiacsign == 8) {
    console.log("Monkey")
}
else if ((year >= 1924 && year <= 2031) && zodiacsign == 9) {
    console.log("Rooster")
}
else if ((year >= 1924 && year <= 2031) && zodiacsign == 10) {
    console.log("Dog")
}
else if ((year >= 1924 && year <= 2031) && zodiacsign == 11) {
    console.log("Pig")
}
else {
    console.log("Wrong Year")
}
