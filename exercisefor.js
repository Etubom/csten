// Objectives
// Understand the purpose of for loops
// Write valid for loops
// Compare and contrast while loops and for loops
// ************************************************
// For Loops
// Another way of repeating code
//
// for(init; condition; step) {
//   //run some code
// }
// *************************************************
// For Loops
// Printing numbers from 1-5 with a for loop
//
// for(var count = 0; count < 6; count++) {
//   console.log(count);
// }
// Printing numbers from 1-5 with a while loop
// var count = 1;
//
// while(count < 6) {
//  console.log("count is: " + count);
//  count++;
// }
// ************************************************
// For Loops
// Printing each character in a string with a for loop
//
// var str = "hello";
//
// for(var i = 0; i < str.length; i++){
//   console.log(str[i]);
// }
// ***And with a while loop***
//
// var str = "hello";
// var count = 0;
//
// while(count < str.length) {
//  console.log(str[count]);
//  count++;
// }
// ****************************************************
//Exercise1
// for(var i = 0; i < 16; i+=8){
//   console.log(i);
// }
//Exercise2
// var str = "ahceclwlxo";
//
// for(var i = 1; i < str.length; i+=2){
//   console.log(str[i]);
// }
//**************************************************
//Print all numbers between -10 and 19
console.log("Print all numbers between -10 and 19");
for(var i=-10;i < 20; i++){
  console.log(i);
}
//**********************************************
//Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40");
for (var i = 10; i <= 40; i+=2) {
  console.log(i);
}
//Proper manner
console.log("Print all even numbers between 10 and 40-this way is proper");
for (var i = 10; i <= 40; i+=1) {
  if (i % 2 === 0) {
  console.log(i);
  }
}
//*********************************************
//Print all odd numbers between 300 and 33
console.log("Print all odd numbers between 300 and 333");
for (var i = 300;i <= 333; i++) {
  console.log(i+=1);
}
//proper manner
console.log("Print all odd numbers between 300 and 333-this way is proper");
for (var i = 300;i <= 333; i++) {
  if (i % 2 !== 0) {
  console.log(i);  
  }
}
//***********************************************
//Print all numbers divisible by 5 AND 3 between 5 and 50
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
for (var i = 5; i <= 50;i++) {
  if ((i % 5 === 0) && (i % 3 === 0)) {
        console.log(i);
  }

}
