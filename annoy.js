//Ask the user "Are we there yet"
//Keep asking again and again until they enter "yes" OR "Yeah"
//Then,alert "Yay, we finally made it!"
//**********************************************

var answer = prompt("Are we there yet?");
while (answer !=="yes" && answer !=="yeah") {
  var answer = prompt("Are we there yet?");
}
alert("Yay,we made it");

//EXTRA: A user can enter any string as long as it contains "yes" in it
//Version 2
//*********************************************
var answer = prompt("Are we there yet?");
while (answer.indexOf("yes") === -1) {
  var answer = prompt("Are we there yet?");
}
alert("Yay,we made it");
