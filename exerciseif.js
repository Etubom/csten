var age = prompt("What is your age?");
if(age < 0){
  console.log("That doesn't seem right!!!");
}else if (age == 21) {
  console.log("Happy 21st birthday!!");
}else if (age % Math.sqrt(age) == 0) {
  console.log("Perfect sqaure!");
}else if((age % 2) == 1){
  console.log("Your age is odd!");
}else{
  console.log("Hmmm,so you are "+ age + "years old!");
}
