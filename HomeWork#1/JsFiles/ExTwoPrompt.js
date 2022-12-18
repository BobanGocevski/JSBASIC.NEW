// Write a JS program that will calculate area of Circle, TIP: area=pi*r2


var r1 = prompt("Enter value for r1");
console.log(r1)
var r2 = prompt("Enter value for r2");
console.log(r2)
var pi = prompt("Enter value for pi");
console.log(pi)

var RadiusR1 = parseInt(r1); //so parseInt pokazuvame deka r1,r2 i pi se broevi t.e deka imaat type number, ako go nemame ova browserot kje ni pokazuva greska i nema da se izvrsi mnozeneto
var RadiusR2 = parseInt(r2);
var pii = parseInt(pi);

var area = (r1 * r2) * pi;
console.log(area);
