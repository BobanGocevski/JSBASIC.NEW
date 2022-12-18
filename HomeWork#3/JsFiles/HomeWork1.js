/*
Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in

Formula for Chinese Zodiac caluclation: (year - 4) % 12. Possible values:

0 - Rat
1 - Ox
2 - Tiger
3 - Rabbit
4 - Dragon
5 - Snake
6 - Horse
7 - Goat
8 - Monkey
9 - Rooster
10 - Dog
11 - Pig

NOTE: Use switch - case structure
*/







var year = parseInt(prompt("Enter year of birth"));
birthYear = (year - 4) % 12

switch (birthYear) {
    case 1: birthYear == 0;
        console.log("Rat")
        break;

    case 2: birthYear == 1
        console.log("Ox")
        break;

    case 3: birthYear == 2;
        console.log("Tiger");
        break;

    case 4: birthYear == 3;
        console.log("Rabbit");
        break;

    case 5: birthYear == 4;
        console.log("Dragon")
        break;

    case 6: birthYear == 5;
        console.log("Snake");
        break;
    case 7: birthYear == 6
        console.log("Horse");
        break;
    case 8: birthYear == 7
        console.log("Goat");
        break;
    case 9: birthYear == 8
        console.log("Monkey");
        break;
    case 10: birthYear == 9
        console.log("Rooster");
        break;
    case 11: birthYear == 10
        console.log("Dog");
        break;
    case 12: birthYear == 11
        console.log("Pig");
        break;

    default: birthYear > 12
        console.log("Problem");
        break;

}
