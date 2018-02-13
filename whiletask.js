//WHILE LOOPS PROBLEM SET
//1. Print all numbers -10 and 19
console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19");
var num = -10;
while (num < 20) {
  console.log(num);
  num++;
}
//2.Print all even number between 10 and 40
console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40");
var even = 10;
while (even <= 40) {
  console.log(even);
  even += 2;
}
//Print all odd numbers between 300 and 333
console.log("PRINT ODD NUMBERS BETWEEN 300 AND 333");
var odd = 300;
while (odd <= 333){
 if(odd % 2 === 1)
  console.log(odd);
  odd++;
}

//Print all numbers divisible by both 5 AND 3 between 5 and 50
console.log("PRINT ALL NUMBERS DIVISIBLE BY BOTH 5 AND 3 BETWEEN 5 AND 50");
var divisibleNumber = 5;
while (divisibleNumber <= 50) {
  if ((divisibleNumber % 5 === 0) && (divisibleNumber % 3 === 0)) {
    console.log(divisibleNumber);
  }
  divisibleNumber++;
}
