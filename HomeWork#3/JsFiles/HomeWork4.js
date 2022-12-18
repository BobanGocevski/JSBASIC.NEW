/*
Write a javascript function for an ATM:
-   The ATM should give cash. It takes as parameter the amount of money you need.
-   Should return "Not enough money" if you request more money
-   Should return the ammount withdrawn and money left on the account if you have enough
-   Note: Hardcode your account money in the program
-   Bonus: Make it work with prompt()! */


function functionATM(cash) {
    var balance = 20000;

    if (cash >= 20000 || cash == 0) {
        console.log("Not enough money")
    }
    else {
        console.log(cash)
    }
    balance = balance - cash ;
    console.log(`Successful transformation! Available balance is ${balance}`)


}

functionATM(parseInt(prompt("Money")))