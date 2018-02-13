//string we're looping over:
var str = "hello";
//first character is at index 0
var count = 0;

while(count < str.length) {
  console.log(str[count]);
  count++;
}
//Print odd numbers from 1-9
var num = 1;
while (num <= 9) {
  console.log(num);
  num += 2;
}

//Print multiples of 4 between 1-20
var num = 1
while (num <= 20) {
  if(num % 4 === 0){
    console.log(num);
  }
  num++;
}

//***infinie loop***
// var num = 100;
// while(num < 150) {
//   console.log(num + 1);
//   num--;
// }
